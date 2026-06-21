import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const PRIVATEKEY = "928e5128c7906c06c98fab96e36354cbc48587bf59fb210cee9142f01906dc63";

export async function handleCreateNewUser(req, res) {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).render("signup", { error: "All fields are required!" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).render("signup", { error: "Email already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullName,
            email,
            password: hashedPassword
        });

        return res.status(201).redirect("/login");
    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).render("signup", { error: "Something went wrong. Please try again." });
    }
}

export async function handleLoginUser(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).render("login", { error: "Email and password are required!" });
        }

        const dbUser = await User.findOne({ email });

        if (!dbUser) {
            return res.status(404).render("login", { error: "User not found!" });
        }

        const isPasswordMatch = await bcrypt.compare(password, dbUser.password);

        if (!isPasswordMatch) {
            return res.status(401).render("login", { error: "Invalid email or password!" });
        }

        const userToken = jwt.sign({
            _id: dbUser._id,
            fullName: dbUser.fullName,
            email: dbUser.email,
            role: dbUser.role
        }, PRIVATEKEY, { expiresIn: "5h" });

        res.cookie("userToken", userToken, {
            httpOnly: true,
            maxAge: 5 * 60 * 60 * 1000
        });

        return res.status(200).redirect("/");
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).render("login", { error: "Something went wrong. Please try again." });
    }
}

export function handleLogoutUser(req, res){
    // const userCookie = req.cookies.userId;
    const userCookie = req.cookies.userToken;

    // clearUser(userCookie);

    // res.clearCookie("userId");

    if(!userCookie){
        return res.redirect("/");
    }

    res.clearCookie("userToken");

    return res.status(200).redirect("/");
}