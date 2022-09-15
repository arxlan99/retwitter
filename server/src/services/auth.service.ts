import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { User } from '../database/models/user';
import AppError from '../utils/appError';
import HandlerFactory from './handlerFactory';
import jwt from 'jsonwebtoken';

const signToken = (id: string) => {
  return jwt.sign({ id }, 'secret-key', {
    expiresIn: 1000 * 24 * 60 * 60 * 1000,
  });
};

const createSendToken = (user: any, statusCode: any, req: Request, res: Response) => {
  const token = signToken(user._id);

  /*   res.cookie('jwt', token, {
    expires: new Date(Date.now() + 1000 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  }); */

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

class AuthService {
  signup = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const newUser = await User.create(req.body);
        createSendToken(newUser, 201, req, res);
      } catch (error) {
        next(error);
      }
    };
  };

  login = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { email, password } = req.body;

        if (!email || !password) {
          return next(new AppError('Please provide email and password', 400));
        }

        const user: any = await User.findOne({ email }).select(
          '+password -__v -createdAt -updatedAt'
        );

        if (!user || !(await user.correctPassword(password, user.password))) {
          return next(new AppError('Incorrect email or password', 422));
        }
        createSendToken(user, 200, req, res);
      } catch (error) {
        next(error);
      }
    };
  };

  protect = () => {
    return async (req: any, res: Response, next: NextFunction) => {
      try {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
          token = req.headers.authorization.split(' ')[1];
        } else if (req.cookies.jwt) {
          token = req.cookies.jwt;
        }
        if (!token) {
          return next(new AppError('You are not logged in! Please log in to get access.', 404));
        }

        const decoded = jwt.verify(token, 'secret-key');
        const currentUser = await User.findById((decoded as any).id);
        if (!currentUser) {
          return next(new AppError('The user belonging to this token does no longer exist.', 401));
        }

        req.user = currentUser;
        next();
      } catch (error) {
        next(error);
      }
    };
  };

  logout = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        /*   res.clearCookie('jwt', {
          expires: new Date(Date.now() + 1000 * 24 * 60 * 60 * 1000),
          httpOnly: true,
          sameSite: 'none',
          secure: true,
        }); */
        res.status(200).json({
          status: 'success',
          data: {
            message: 'Logged out successfully',
            token: null,
          },
        });
      } catch (error) {
        next(error);
      }
    };
  };

  authMe = () => {
    return async (req: any, res: Response, next: NextFunction) => {
      try {
        const user = await User.findById(req.user._id);
        res.status(200).json({
          status: 'success',
          data: {
            user,
          },
        });
      } catch (error) {
        next(error);
      }
    };
  };
}

export default AuthService;
