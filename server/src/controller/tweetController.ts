import { Tweet } from './../database/models/tweets';
import TweetService from '../services/tweet.service';

const tweetService = new TweetService(Tweet);

export const getAllTweets = tweetService.getAll({
  populate: 'user',
  unSelect: '-__v',
});
export const createTweet = tweetService.createOne();
export const getTweet = tweetService.getOne({
  populate: 'user',
  unSelect: '-__v',
});
export const updateTweet = tweetService.updateOne();
export const deleteTweet = tweetService.deleteOne();
