import mongoose from 'mongoose';
import { IUser, User } from '../database/models/user';
import HandlerFactory from './handlerFactory';

class UserService extends HandlerFactory<IUser> {
  constructor(Model: any) {
    super(Model);
  }
}

export default UserService;
