import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { ITweet } from '../database/models/tweets';
import HandlerFactory from './handlerFactory';


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
      try {
        const storage = new Storage();
        console.log(req);
        res.send('ok');
        /*   storage.bucket('retwitter').upload('', {}, (err: any, file: any) => {
          if (err) {
            console.log(err);
          }
          console.log(file);
        });
 */
        // const gc = path.join(__dirname, 'general-projects-360221-3af43f396d83.json');
        // const projectId = 'general-projects-360221';
        /* const doc = await this.Model.create(req.body);

        res.status(201).json({
          status: 'success',
          data: doc,
        }); */
      } catch (error: any) {
        next(error);
      }
    };
  };
}

export default TweetService;
