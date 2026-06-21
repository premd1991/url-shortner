import { nanoid } from "nanoid";
import URL from "../models/url.model.js";

export async function handleCreateNewShortId(req, res) {
    try {
        const { longUrl } = req.body;

        if (!longUrl) {
            return res.status(400).render("url", { error: "Long URL is required" });
        }

        const shortId = nanoid(10);
        
        await URL.create({
            longUrl: longUrl,
            shortId: shortId,
            visitHistory: [],
            createdBy: req.user._id
        });

        return res.status(201).render("url", {
            shortId: shortId
        });
    } catch (error) {
        console.error("Create Short URL Error:", error);
        return res.status(500).render("url", { error: "Internal server error" });
    }
}

export async function handleRedirectShortId(req, res) {
    try {
        const shortId = req.params.shortid;

        if (!shortId) {
            return res.status(400).json({ message: "short id is required!" });
        }

        const dbUrl = await URL.findOneAndUpdate({ shortId: shortId }, {
            $push: {
                visitHistory: {
                    visitTime: new Date()
                }
            }
        });

        if (!dbUrl) {
            return res.status(404).render("404", { message: "Short URL not found" });
        }

        return res.status(301).redirect(dbUrl.longUrl);
    } catch (error) {
        console.error("Redirect Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export async function handleUrlAnalysis(req, res) {
    const shortId = req.params.shortid;

    if (!shortId) {
        return res.status(400).json({ message: "short id is required!" })
    }

    const dbUrl = await URL.findOne({ shortId: shortId });

    if (!dbUrl) {
        return res.status(404).json({ message: "Short URL not found" });
    }

    return res.status(200).json({message: "url fetched!", totalClicks: dbUrl.visitHistory.length, analysis: dbUrl.visitHistory});
}

export async function handleGetAllUrls(req, res){
    try {
        const allUrls = await URL.find({ createdBy: req.user._id });

        return res.status(200).render("allurls", {
            urls: allUrls
        });
    } catch (error) {
        console.error("Get All URLs Error:", error);
        return res.status(500).render("allurls", { urls: [], error: "Failed to fetch URLs" });
    }
}