import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username : {
            type : String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        emial : {
            type : String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname : {
            type : String,
            require: true,
            trim: true,
            index: true
        },
        Avatar : {
            type : String,
            require: true,
        },
        coverImage : {
            type : String,
        },
        watchHistory : [
           {
            type : Schema.Types.ObjectId,
            ref: "Video",
           }
        ],
        password: {
            type: String,
            require: [true, "password is required"]
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)


export const User  = mongoose.model("User",  userSchema)