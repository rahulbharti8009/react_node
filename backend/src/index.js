// require('dotenv').config()
import dotenv from 'dotenv'
import connectDB from "./db/db.js";
import express from "express"

dotenv.config({path: './env'})

const app = express()


connectDB().then(()=> {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
}).catch((err)=> console.log("mongo db connection failed",err))







/*
import express from "express";
const app = express();

(async()=> {
    try {
        await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`)
        app.on("error" =() => {
            console.log("ERROR:", error)
            throw error
        })
        app.listen(process.env.PORT, ()=> {
            console.log(`App is listening on port ${process.env.PORT}`)

        })
    } catch {

    }
})()
    */