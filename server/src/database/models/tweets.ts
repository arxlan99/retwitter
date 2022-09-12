import mongoose from 'mongoose';

export interface ITweet extends mongoose.Document {
  text: string;
  user: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const tweetSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Tweet = mongoose.model<ITweet>('Tweet', tweetSchema);
