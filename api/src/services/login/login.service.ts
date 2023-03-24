import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { compareSync } from 'bcryptjs';
import prismaClient from '../../database/prismaClient';
import AppError from '../../errors/AppError';
import { IUserLogin } from '../../interfaces/users.interfaces';

const loginService = async (loginData: IUserLogin) => {
  const user = await prismaClient.user.findUnique({
    where: { email: loginData.email },
  });

  if (!user) {
    throw new AppError('wrong login or password', 404);
  }

  const passwordMatch = compareSync(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError('wrong email or password', 404);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    expiresIn: '24h',
    subject: user.id,
  });

  return { token };
};

export default loginService;
