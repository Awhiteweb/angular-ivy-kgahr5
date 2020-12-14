import { IContact } from "../contact/contact";

export interface IAddress {
  id: string;
  contact: IContact;
  name: string;
  lineOne: string;
  lineTwo: string;
  city: string;
  postcode: string;
  country: string;
}
