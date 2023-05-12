import express from 'express'
import connectDB from './db/connection.js'
import * as allroutes from './index.routes.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use (express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
const baseurl = '/connectionapp/api/v1'
app.use (`${baseurl}/user`,allroutes.userrouter)
app.use (`${baseurl}/contact`,allroutes.contactroutes)

const port = process.env.port
connectDB()

app.listen(port,console.log(`app is running on port ${port}........`))