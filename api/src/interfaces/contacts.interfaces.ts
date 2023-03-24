export interface IReqUser {
  id: string;
  isAdm: boolean;
}

export interface IContactRequest {
  fullName: string;
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

export interface IContactUpdateRequest {
  fullName?: string;
}

export interface IContactResponse {
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

export interface IContactRetrieve {
  id: string;
  fullName: string;
  createdAt: Date;
  listEmail: [
    {
      id: string;
      email: string;
    },
  ];
  listPhoneNumber: [{ id: string; phoneNumber: string }];
}
