import prismaClient from '../../database/prismaClient';
import AppError from '../../errors/AppError';
import { contactRetrieveSerializer } from '../../serializers/contact.serializes';

const retrieveContactService = async (contactId: string, userId: string) => {
  const contact = await prismaClient.contact.findFirst({
    where: { id: contactId, userId: userId },
    include: { listEmail: true, listPhoneNumber: true },
  });

  if (!contact) {
    throw new AppError('contact not found', 404);
  }

  return await contactRetrieveSerializer.validate(contact, {
    stripUnknown: true,
  });
};

export default retrieveContactService;
