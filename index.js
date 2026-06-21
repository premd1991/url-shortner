import express from "express";
import connectDB from "./connect.js"
import urlRouter from "./routes/url.routes.js"
import userRouter from "./routes/user.routes.js"
import cookieParser from "cookie-parser";
import path from "path";
import jwt from "jsonwebtoken";
import { handleVerifyUserLogin } from "./middlewares/auth.middleware.js";

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.use((req, res, next) => {
    const token = req.cookies.userToken;
    if (token) {
        try {
            const PRIVATEKEY = "928e5128c7906c06c98fab96e36354cbc48587bf59fb210cee9142f01906dc63";
            const decoded = jwt.verify(token, PRIVATEKEY);
            res.locals.user = decoded;
            req.user = decoded;
        } catch (err) {
            res.clearCookie("userToken");
            res.locals.user = null;
        }
    } else {
        res.locals.user = null;
    }
    next();
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

// app.get("/", (req, res) => {
//     return res.send("Welcome from server!");
// })

app.get("/", (req, res) => {
    return res.status(200).render("home");
})

app.use("/url", urlRouter);
app.use("/user", userRouter);

app.get("/login", (req, res) => {
    if (req.user) return res.redirect("/");
    return res.render("login");
});
app.get("/signup", (req, res) => {
    if (req.user) return res.redirect("/");
    return res.render("signup");
});

app.get("/createUrl", handleVerifyUserLogin, (req, res)=>{
    return res.status(200).render("url")
})

app.listen(PORT, () => {
    console.log(`server started at - http://localhost:${PORT}`);
})