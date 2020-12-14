import { Observable } from "rxjs";
import { IOrder } from "./order";

export class OrderService {
  createOrder(order: IOrder): Observable<string> {
    throw new Error("not implemented yet");
  }

  displayOrder(id: string): Observable<IOrder> {
    throw new Error("not implemented yet");
  }

  listOrders(): Observable<IOrder[]> {
    throw new Error("not implemented yet");
  }
}
