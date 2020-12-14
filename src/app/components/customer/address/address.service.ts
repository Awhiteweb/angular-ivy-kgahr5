import { IAddress } from "./address";
import { Observable } from "rxjs";
export class AddressService {
  getAddress(id: string): IAddress {
    return {
      id,
      contact: {
        method: "phone",
        phoneNumber: "0123456789"
      },
      name: "a",
      lineOne: "a",
      lineTwo: "a",
      city: "a",
      postcode: "a",
      country: "a"
    };
  }

  saveAddress(address: IAddress): Observable<boolean> {
    throw new Error("not implemented yet.");
  }
}
