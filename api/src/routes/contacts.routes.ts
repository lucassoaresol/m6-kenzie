import { Router } from 'express';
import {
  createContactController,
  retrieveContactController,
  updateContactController,
  deleteContactController,
} from '../controllers/contacts.controllers';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import ensureUserTokenIsExistMiddleware from '../middlewares/ensureUserTokenIsExist.middleware';
import {
  contactSerializer,
  contactUpdateSerializer,
} from '../serializers/contact.serializes';

const contactRouter: Router = Router();

contactRouter.post(
  '',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(contactSerializer),
  createContactController,
);
contactRouter.get(
  '/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  retrieveContactController,
);
contactRouter.patch(
  '/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(contactUpdateSerializer),
  updateContactController,
);
contactRouter.delete(
  '/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  deleteContactController,
);
contactRouter.post(
  '/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(contactUpdateSerializer),
  createContactEmailController,
);
contactRouter.patch(
  '/:contactId/:emailId',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(contactUpdateSerializer),
  updateContactEmailController,
);
contactRouter.delete(
  '/:contactId/:emailId',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  deleteContactEmailController,
);
contactRouter.post(
  '/:id',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(contactUpdateSerializer),
  createContactPhoneController,
);
contactRouter.patch(
  '/:contactId/:phoneId',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  ensureDataIsValidMiddleware(contactUpdateSerializer),
  updateContactPhoneController,
);
contactRouter.delete(
  '/:contactId/:phoneId',
  ensureAuthMiddleware,
  ensureUserTokenIsExistMiddleware,
  deleteContactPhoneController,
);

export default contactRouter;
