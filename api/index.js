import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
dotenv.config()
const app = express();
app.use(express.json())


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDb')
}).catch((err)=>{
    console.log(err)
})

app.listen(3000, ()=>{
    console.log('Server listining on port 3000')
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)


app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})