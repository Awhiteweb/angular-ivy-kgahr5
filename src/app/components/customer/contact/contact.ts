export interface IContact {
  method: ContactMethod;
  phoneNumber?: string;
  emailAddress?: string;
}

export type ContactMethod = "email" | "phone";
