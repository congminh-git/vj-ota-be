import { Request } from 'express';
const getToken = async (req: Request) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      throw new Error('Token is required.');
    }
    if (token === '' || token === undefined || token === null) {
      return null;
    }
    return token !== '' ? token : null;
  } catch (err) {
    return null;
  }
};

export default getToken;
