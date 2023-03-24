import * as yup from 'yup';
import { SchemaOf } from 'yup';
import {
  IUserLogin,
  IUserRequest,
  IUserResponse,
  IUserUpdate,
} from '../interfaces/users.interfaces';

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  fullName: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().required(),
});

const userLoginSerializer: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
  fullName: yup.string(),
  password: yup.string(),
  email: yup.string().email(),
});

const userResponserSerializer: SchemaOf<IUserResponse> = yup.object().shape({
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

export {
  userSerializer,
  userLoginSerializer,
  userUpdateSerializer,
  userResponserSerializer,
};
