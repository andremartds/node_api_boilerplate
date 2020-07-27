import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);
    req.userId = decoded.id;
  } catch (err) {
    res.status(401).json({ error: 'invalid Token' });
  }

  next();
};
