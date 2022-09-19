import { Request, Response, NextFunction, RequestHandler } from 'express';
import AppError from '../utils/appError';
import APIFeatures from '../utils/apiFetaure';
import mongoose from 'mongoose';

class HandlerFactory<TModel> {
  protected Model: mongoose.Model<TModel>;

  constructor(Model: any) {
    this.Model = Model;
  }

  deleteOne = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
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
  };

  updateOne = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
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
  };

  createOne = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const doc = await this.Model.create(req.body);

        res.status(201).json({
          status: 'success',
          data: doc,
        });
      } catch (error) {
        next(error);
      }
    };
  };

  getOne = (data?: { unSelect?: string; populate?: string }) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        let query = this.Model.findById(req.params.id)
          .select(data?.unSelect)
          .populate(data?.populate || '');
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
  };

  /**
   * @description Return all documents in the collection
   * @param {string} unSelect - fields to exclude from the response
   * @returns {Promise<TModel[]>}
   */

  getAll = (data?: { unSelect?: string; populate?: string }) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        // get data by interacting with the model
        const features = new APIFeatures(
          this.Model.find()
            .select(data?.unSelect)
            .populate(data?.populate || '', data?.unSelect),
          req.query
        )
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
  };
}

export default HandlerFactory;
