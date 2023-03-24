import { NextFunction, Request, Response } from 'express';
import prismaClient from '../database/prismaClient';
import AppError from '../errors/AppError';

const ensureUserTokenIsExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = await prismaClient.user.findUnique({
    where: { id: req.user.id },
  });

  if (!user) {
    throw new AppError('user does not have permission', 403);
  }

  return next();
};

export default ensureUserTokenIsExistMiddleware;
