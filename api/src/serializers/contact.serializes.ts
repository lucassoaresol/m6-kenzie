import * as yup from 'yup';
import { SchemaOf } from 'yup';
import {
  IContactRequest,
  IContactResponse,
  IContactRetrieve,
  IContactUpdateRequest,
} from '../interfaces/contacts.interfaces';

const contactSerializer: SchemaOf<IContactRequest> = yup.object().shape({
  fullName: yup.string().required(),
  listEmail: yup.array(
    yup.object().shape({ email: yup.string().email().required() }),
  ),
  listPhoneNumber: yup
    .array(yup.object().shape({ phoneNumber: yup.string().required() }))
    .required(),
});

const contactUpdateSerializer: SchemaOf<IContactUpdateRequest> = yup
  .object()
  .shape({
    fullName: yup.string().required(),
  });

const contactResponserSerializer: SchemaOf<IContactResponse> = yup
  .object()
  .shape({
    createdAt: yup.date(),
    listPhoneNumber: yup.array(
      yup.object().shape({ phoneNumber: yup.string().required() }),
    ),
    listEmail: yup.array(
      yup.object().shape({ email: yup.string().email().required() }),
    ),
    fullName: yup.string(),
    id: yup.string().uuid(),
  });

const contactRetrieveSerializer: SchemaOf<IContactRetrieve> = yup
  .object()
  .shape({
    createdAt: yup.date(),
    listPhoneNumber: yup.array(
      yup.object().shape({
        phoneNumber: yup.string().required(),
        id: yup.string().uuid().required(),
      }),
    ),
    listEmail: yup.array(
      yup.object().shape({
        email: yup.string().email().required(),
        id: yup.string().uuid().required(),
      }),
    ),
    fullName: yup.string(),
    id: yup.string().uuid(),
  });

const listContactsSerializer: yup.ArraySchema<SchemaOf<IContactResponse>> =
  yup.array(contactResponserSerializer);

export {
  contactSerializer,
  contactUpdateSerializer,
  contactResponserSerializer,
  contactRetrieveSerializer,
  listContactsSerializer,
};
