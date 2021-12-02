export class PutFirstname {
  firstName: string | undefined;
}

export class PutSecondName {
  secondName: string | undefined;
}

export class PutLastName {
  lastName: string | undefined;
}

export class PutPhoneNumber {
  phoneNumber: string | undefined;
}

export interface NewMUser {
  firstName: string;
  secondName: string;
  lastName: string;
  phoneNumber: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}
