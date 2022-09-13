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

import { Storage } from '@google-cloud/storage';

let projectId = 'general-projects-360221'; // Get this from Google Cloud
let keyFilename = path.join(__dirname, 'general-projects-360221-3af43f396d83.json'); // Get this from Google Cloud -> Credentials -> Service Accounts
const storage = new Storage({
  projectId,
  keyFilename,
});
const bucket = storage.bucket('retwitter'); // Get this from Google Cloud -> Storage

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // No larger than 5mb, change as you need
  },

  /*   fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      cb(new Error('Only upload images'));
    }

    cb(null, true);
  } */
});

const router = express.Router();

router.route('/test').post(multer.single('imgfile'), (req: any, res, next) => {
  console.log(req.file);

  // add file to bucket
  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream();

  if (req.file) {
    blobStream.on('error', (err: any) => {
      next(err);
    });

    blobStream.on('finish', () => {
      // The public URL can be used to directly access the file via HTTP.
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      res.status(200).json({ url: publicUrl });
    });

    blobStream.end(req.file.buffer);
  }
});

// router.use(protect);

router.route('/').get(protect, getAllTweets).post(createTweet);

router.route('/:id').get(getTweet).patch(updateTweet).delete(deleteTweet);

export default router;
