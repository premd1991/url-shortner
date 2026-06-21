import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },

    shortId: {
        type: String,
        required: true
    },

    visitHistory: [
        {
            visitTime: {
                type: Date,
                default: Date.now
            }
        }
    ],

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
}, { timestamps: true });

const URL = mongoose.model("urls", urlSchema);

export default URL;