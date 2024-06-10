// const express = require('express') 
import express from 'express'

// import {dataJson} from '../backend/AllJson'

const app = express()

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
    console.log(`Server http://localost:3000 ${port}`)
})

