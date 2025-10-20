import { NextFunction, Request, Response } from 'express';

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      throw new Error('Token is required.');
    }
    if (token === '' || token === undefined || token === null) {
      return res.status(401).send('Token is required.');
    }
    next();
  } catch (err) {
    res.status(401).send('Please authenticate');
  }
};
export default auth;
