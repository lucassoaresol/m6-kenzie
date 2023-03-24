import prismaClient from '../../database/prismaClient';
import { IContactUpdateRequest } from '../../interfaces/contacts.interfaces';
import { contactResponserSerializer } from '../../serializers/contact.serializes';

const updateContactService = async (
  contactData: IContactUpdateRequest,
  contactId: string,
) => {
  const contact = await prismaClient.contact.update({
    where: { id: contactId },
    data: { ...contactData },
    include: { listEmail: true, listPhoneNumber: true },
  });

  return await contactResponserSerializer.validate(contact, {
    stripUnknown: true,
  });
};

export default updateContactService;
