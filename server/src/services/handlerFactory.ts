import { Request, Response, NextFunction, RequestHandler } from 'express';
import AppError from '../utils/appError';
import APIFeatures from '../utils/apiFetaure';

class HandlerFactory {
  private Model: any;

  constructor(Model: any) {
    this.Model = Model;
  }

  deleteOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const doc = await this.Model.findByIdAndDelete(req.params.id);

      if (!doc) {
        return next(new AppError('No document found with that ID', 404));
      }

      res.status(204).json({
        status: 'success',
        data: null,
      });
    } catch (error) {
      next(error);
    }
  };

  updateOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const doc = await this.Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!doc) {
        return next(new AppError('No document found with that ID', 404));
      }

      res.status(200).json({
        status: 'success',
        data: doc,
      });
    } catch (error: any) {
      next(error);
    }
  };

  createOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      const doc = await this.Model.create(req.body);

      res.status(201).json({
        status: 'success',
        data: doc,
      });
    } catch (error) {
      next(error);
    }
  };

  getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let query = this.Model.findById(req.params.id);
      const doc = await query;

      if (!doc) {
        return next(new AppError('No document found with that ID', 404));
      }

      res.status(200).json({
        status: 'success',
        data: doc,
      });
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const features = new APIFeatures(this.Model.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const doc = await features.query;

      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        resultsLength: doc.length,
        data: doc,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default HandlerFactory;
