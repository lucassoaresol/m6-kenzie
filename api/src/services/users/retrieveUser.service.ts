import prismaClient from '../../database/prismaClient';
import { userResponserSerializer } from '../../serializers/user.serializes';

const retrieveUserService = async (userId: string) => {
  const user = await prismaClient.user.findUnique({
    where: { id: userId },
    include: { listEmail: true, listPhoneNumber: true },
  });

  return await userResponserSerializer.validate(user, {
    stripUnknown: true,
  });
};

export default retrieveUserService;
