import express from "express";
import { handleCreateNewShortId, handleRedirectShortId, handleUrlAnalysis, handleGetAllUrls } from "../controllers/url.controller.js"
import { handleVerifyUserLogin, handleCheckAuthorization } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").post(handleVerifyUserLogin, handleCheckAuthorization(["USER", "ADMIN"]), handleCreateNewShortId);

router.route("/:shortid").get(handleRedirectShortId);

router.route("/analysis/:shortid").get(handleUrlAnalysis);

router.route("/allurls").get(handleVerifyUserLogin, handleCheckAuthorization(["USER", "ADMIN"]), handleGetAllUrls);

export default router;