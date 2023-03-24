import prismaClient from '../../database/prismaClient';

const deleteContactService = async (contactId: string) => {
  await prismaClient.contact.delete({ where: { id: contactId } });
};

export default deleteContactService;
