import prismaClient from '../../database/prismaClient';
import { IContactRequest } from '../../interfaces/contacts.interfaces';
import { contactResponserSerializer } from '../../serializers/contact.serializes';

const createContactService = async (
  contactData: IContactRequest,
  userId: string,
) => {
  const contact = await prismaClient.contact.create({
    data: {
      fullName: contactData.fullName,
      listEmail: { createMany: { data: contactData.listEmail } },
      listPhoneNumber: { createMany: { data: contactData.listPhoneNumber } },
      userId: userId,
    },
    include: { listEmail: true, listPhoneNumber: true },
  });

  return await contactResponserSerializer.validate(contact, {
    stripUnknown: true,
  });
};

export default createContactService;
