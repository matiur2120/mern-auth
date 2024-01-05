import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
dotenv.config()
const app = express();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDb')
}).catch((err)=>{
    console.log(err)
})

app.listen(3000, ()=>{
    console.log('Server listining on port 3000')
})