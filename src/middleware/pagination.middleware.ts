import { NextFunction, Request, Response } from 'express';
import { Document, Model } from 'mongoose';
import { PaginationObject } from '../interfaces/common.interface';

export default function paginationMiddleware(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  model: Model<Document>,
  population: { populationField: string; selectionField: string }[],
  findCriteria?: {}
) {
  return async function asyncPaginationMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const page = parseInt(req.query.page, 10);
      const limit = parseInt(req.query.limit, 10);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const documentCount = await model.countDocuments();

      const modelQueryBuilder = model.find(findCriteria || {});

      population.forEach(
        ({ populationField: populate, selectionField: selection }) => {
          if (populate.length > 0)
            modelQueryBuilder.populate(populate, selection || '');
        }
      );

      modelQueryBuilder.limit(limit).skip(startIndex);

      const results = await modelQueryBuilder.exec();

      const paginatedData: PaginationObject<Document> = {
        results,
        totalRecords: documentCount
      };

      if (startIndex > 0) {
        paginatedData.prev = {
          page: page - 1,
          limit
        };
      }

      if (endIndex < documentCount) {
        paginatedData.next = {
          page: page + 1,
          limit
        };
      }

      res.paginatedData = paginatedData;

      next();
    } catch (err) {
      next(err);
    }
  };
}
