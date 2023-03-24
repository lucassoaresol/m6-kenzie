export interface IReqUser {
  id: string;
}

export interface IUserRequest {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface IUserUpdate {
  fullName?: string;
  email?: string;
  password?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserResponse {
  id: string;
  fullName: string;
  createdAt: Date;
  listEmail: [
    {
      email: string;
    },
  ];
  listPhoneNumber: [
    {
      phoneNumber: string;
    },
  ];
}
