import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import userRoutes from './api/routes/userRoutes';
import authRoutes from './api/routes/authRoutes';
import tweetRoutes from './api/routes/tweetRoutes';

import AppError from './utils/appError';
import globalErrorHandler from './controller/errorController';

const app: Application = express();

dotenv.config();
const port = process.env.PORT || 4000;

app.use(
  cors({
    credentials: true,
    origin: ['https://retwitter.vercel.app', 'http://localhost:3000'],

    // allowedHeaders: ['Content-Type', 'Authorization'],
    // ‘Access-Control-Allow-Origin
    // exposedHeaders: ['set-cookie'],
    // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

// app.set('trust proxy', 1);

app.use(express.json());
// app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/tweets', tweetRoutes);

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!');
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

mongoose.connect(process.env.MONGO_URI as string).then(() => {
  console.log('DB connection successful!');
});

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port} ...`);
});
