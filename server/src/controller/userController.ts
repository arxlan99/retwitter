import { User } from './../database/models/user';
import UserService from '../services/user.service';

const userService = new UserService(User);

export const getAllUsers = userService.getAll(
  '-password -createdAt -updatedAt'
);
export const createUser = userService.createOne();
export const getUser = userService.getOne();
export const updateUser = userService.updateOne();
export const deleteUser = userService.deleteOne();
