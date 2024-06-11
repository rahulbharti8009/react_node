// const express = require('express') 
import express from 'express'

// import {dataJson} from '../backend/AllJson'

const app = express()
 app.use(express.static('dist')) // use() is a middleware, dist folder generated from frontend , the command is npm run build

const dataJson = {
    "type": "TRUE",
    "message": "Device ALready Exist",
    "value": "ACTIVE"
}

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

