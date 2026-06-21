import { getUser } from "../utils/userRecord.js";
import jwt from "jsonwebtoken";

const PRIVATEKEY = "928e5128c7906c06c98fab96e36354cbc48587bf59fb210cee9142f01906dc63";

export function handleVerifyUserLogin(req, res, next){
    // const userCookie = req.cookies.userId;

    // // console.log(req);
    // console.log(userCookie);

    // let result = getUser(userCookie);

    // if(!result){
    //     return res.status(403).json({message: "user not login"})
    // }

    // req.user = result;


    const userCookie = req.cookies.userToken;

    // const headerToken = req.headers.authorization.split(" ")[1];
    // console.log(headerToken)

    // return res.send("hello")

    if(!userCookie){
        return res.status(403).redirect("/user/login");
    }

    try {
        let decoded = jwt.verify(userCookie, PRIVATEKEY);
        if(!decoded){
            return res.status(400).json({message: "token not valid!"})
        }
        req.user = decoded;
        next();
    } catch (err) {
        res.clearCookie("userToken");
        return res.status(403).redirect("/user/login");
    }
}


export function handleCheckAuthorization(roles){
    return function (req, res, next){

        if(!req.user || !roles.includes(req.user.role)){
            return res.status(403).json({message: "you are not authorized to used this route"})
        }

        next();
    }
}