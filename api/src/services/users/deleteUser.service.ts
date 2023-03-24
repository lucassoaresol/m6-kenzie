import prismaClient from '../../database/prismaClient';

const deleteUserService = async (userId: string) => {
  await prismaClient.user.delete({ where: { id: userId } });
};

export default deleteUserService;
