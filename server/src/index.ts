import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRoutes from './api/routes/userRoutes';
import authRoutes from './api/routes/authRoutes';
import tweetRoutes from './api/routes/tweetRoutes';

import AppError from './utils/appError';
import globalErrorHandler from './controller/errorController';

const app: Application = express();

const port = process.env.PORT || 4000;

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/tweets', tweetRoutes);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

mongoose
  .connect(
    'mongodb+srv://arslan:TwPJ7fBPbfX02CNe@cluster0.z9ilwtm.mongodb.net/twitter?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB connection successful!');
  });

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
