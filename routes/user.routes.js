import express from "express";
import { handleCreateNewUser, handleLoginUser, handleLogoutUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/signup", (req, res) => {
    if (req.user) return res.redirect("/");
    return res.render("signup");
});
router.post("/signup", handleCreateNewUser);

router.get("/login", (req, res) => {
    if (req.user) return res.redirect("/");
    return res.render("login");
});
router.post("/login", handleLoginUser);

router.get("/logout", handleLogoutUser);

export default router;