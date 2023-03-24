import prismaClient from '../../database/prismaClient';
import { listContactsSerializer } from '../../serializers/contact.serializes';

const listContactsService = async (userId: string) => {
  const contacts = await prismaClient.contact.findMany({
    where: { userId: userId },
    include: { listEmail: true, listPhoneNumber: true },
  });

  return await listContactsSerializer.validate(contacts, {
    stripUnknown: true,
  });
};

export default listContactsService;
