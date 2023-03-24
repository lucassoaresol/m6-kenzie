import prismaClient from '../../database/prismaClient';
import { hashSync } from 'bcryptjs';
import { IUserRequest } from '../../interfaces/users.interfaces';
import { userResponserSerializer } from '../../serializers/user.serializes';
import AppError from '../../errors/AppError';

const createUserService = async (userData: IUserRequest) => {
  const findUser = await prismaClient.user.findFirst({
    where: {
      email: userData.email,
    },
  });

  if (findUser) {
    throw new AppError('user already exists', 409);
  }

  userData.password = hashSync(userData.password, 10);
  const phoneNumber = userData.phoneNumber;
  delete userData.phoneNumber;

  const user = await prismaClient.user.create({
    data: {
      ...userData,
      listEmail: { create: { email: userData.email } },
      listPhoneNumber: { create: { phoneNumber: phoneNumber } },
    },
    include: { listEmail: true, listPhoneNumber: true },
  });

  return await userResponserSerializer.validate(user, {
    stripUnknown: true,
  });
};

export default createUserService;
