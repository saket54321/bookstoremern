import express from "express";
import mongoose from "mongoose";
import {PORT,MongodbURL} from "./config.js"
import router from "./book.routes.js";
import cors from "cors";
const app=express();
app.use(express.json());
//app.use(cors());
app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type'],
}))

app.use('/books',router);

mongoose.connect(MongodbURL)
.then(()=>{
    
    app.listen(PORT,()=>{
        console.log(`app is listening on:${PORT}`);
    })
    console.log("app is connected to database");
})
.catch((error)=>{
    console.log("error in connecting wirh database");
})

