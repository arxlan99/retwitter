import express from 'express';
import {
  createTweet,
  deleteTweet,
  getAllTweets,
  getTweet,
  updateTweet,
} from './../../controller/tweetController';
import { protect } from '../../controller/authContoller';

import Multer from 'multer';
import path from 'path';

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // No larger than 5mb, change as you need
  },
});

const router = express.Router();

// router.use(protect);

router.route('/').get(protect, getAllTweets).post(protect, multer.single('imgfile'), createTweet);

router.route('/:id').get(getTweet).patch(updateTweet).delete(deleteTweet);

export default router;
