import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { ITweet } from '../database/models/tweets';
import HandlerFactory from './handlerFactory';
import path from 'path';
import { Storage } from '@google-cloud/storage';

let projectId = process.env.GOOGLE_CLOUD_PROJECT_ID; // Get this from Google Cloud
let keyFilename = path.join(__dirname, 'passport-js-355812-27cda5327141.json'); // Get this from Google Cloud -> Credentials -> Service Accounts
const storage = new Storage({
  projectId,
  keyFilename,
});
const bucket = storage.bucket('retwitter-1'); // Get this from Google Cloud -> Storage

class TweetService extends HandlerFactory<ITweet> {
  constructor(Model: any) {
    super(Model);
  }

  createOne: () => (
    req: any,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ) => Promise<void> = () => {
    return async (req, res, next) => {
      console.log('req.file', req.file);
      try {
        // add file to bucket
        const blob = bucket.file(req.file.originalname);
        const blobStream = blob.createWriteStream();

        if (req.file) {
          blobStream.on('error', (err: any) => {
            next(err);
          });

          blobStream.on('finish', async () => {
            // The public URL can be used to directly access the file via HTTP.
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

            const doc = await this.Model.create({
              image: publicUrl,
              text: req.body.text,
              user: req.user._id,
            });

            res.status(200).json({
              data: doc,
              status: 'success',
            });
          });

          blobStream.end(req.file.buffer);
        }
      } catch (error: any) {
        next(error);
      }
    };
  };
}

export default TweetService;
