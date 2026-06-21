import mongoose from "mongoose";

const dblink = "mongodb://127.0.0.1:27017";
const dbName = "url-shortner-1";

function connectDB() {
    mongoose.connect(`${dblink}/${dbName}`)
        .then(() => {
            console.log("mongodb connected");
        })
        .catch((err) => {
            console.log(err);
        })
}

export default connectDB;