// const express = require('express') 
import express from "express"
import cors from "cors"
import cookiesParser from "cookie-parser"

const app = express()
app.use(cors({origin: process.env.CORS_ORIGIN, credentials: true}))
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({}))
app.use(express.static("public"))
app.use(cookiesParser())
 //app.use(express.static('dist')) // use() is a middleware, dist folder generated from frontend , the command is npm run build

app.get('/', (req, res)=>{
    res.send(dataJson)
})

app.get('/api/login', (req, res)=>{
    // params from client end
    // communicaton from other api
    // communication from database 
    res.send(dataJson)
})

const port = process.env.PORT || 3000

app.listen(port , ()=> {
    console.log(`Server http://localhost:3000/ ${port}`)
})



export { app }