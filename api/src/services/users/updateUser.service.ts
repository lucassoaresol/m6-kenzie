import prismaClient from '../../database/prismaClient';
import { hashSync } from 'bcryptjs';
import { IUserUpdate } from '../../interfaces/users.interfaces';
import { userResponserSerializer } from '../../serializers/user.serializes';

const updateUserService = async (userData: IUserUpdate, userId: string) => {
  if (userData.password) {
    userData.password = hashSync(userData.password, 10);
  }

  if (userData.email) {
    const userFind = await prismaClient.user.findUnique({
      where: { id: userId },
      include: { listEmail: true },
    });

    const emailId = userFind.listEmail.map((el) => {
      if (el.email == userFind.email) {
        return el.id;
      }
    })[0];

    const user = await prismaClient.user.update({
      where: { id: userId },
      data: {
        ...userData,
        listEmail: {
          update: { where: { id: emailId }, data: { email: userData.email } },
        },
      },
      include: { listEmail: true, listPhoneNumber: true },
    });

    return await userResponserSerializer.validate(user, {
      stripUnknown: true,
    });
  }
  const user = await prismaClient.user.update({
    where: { id: userId },
    data: { ...userData },
    include: { listEmail: true, listPhoneNumber: true },
  });

  return await userResponserSerializer.validate(user, {
    stripUnknown: true,
  });
};

export default updateUserService;
