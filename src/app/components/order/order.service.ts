import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IOrderViewModel } from "./order";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  private _ordersListSubject$: BehaviorSubject<
    IOrderViewModel[]
  > = new BehaviorSubject<IOrderViewModel[]>([]);

  createOrder(order: IOrderViewModel): Observable<string> {
    // call api to create a new order and return the order id on completion
    throw new Error("not implemented yet");
  }

  displayOrder(id: string): Observable<IOrderViewModel> {
    // call the api to get a specific order
    throw new Error("not implemented yet");
  }

  getOrdersList$(startAfter: number) {
    // call api to get next set of view models for dashboard
    this._ordersListSubject$.next([
      {
        address: "123",
        id: "123",
        name: "Kate",
        qty: 1,
        status: "pending_payment"
      },
      {
        address: "abc",
        id: "124",
        name: "Alex",
        qty: 1,
        status: "paid"
      },
      {
        address: "jdhs",
        id: "125",
        name: "Chloe",
        qty: 2,
        status: "ready_for_delivery"
      },
      {
        address: "eind",
        id: "126",
        name: "Richard",
        qty: 2,
        status: "completed"
      }
    ]);
  }

  get subscribeToOrdersList$(): Observable<IOrderViewModel[]> {
    return this._ordersListSubject$.asObservable();
  }
}
