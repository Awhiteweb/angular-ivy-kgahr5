import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IOrderViewModel } from "../order";
import { OrderService } from "../order.service";

@Component({
  selector: "rtg-order-list",
  templateUrl: "./order-list.component.html"
})
export class OrderListComponent implements OnInit {
  orderList$: Observable<IOrderViewModel[]>;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderList$ = this.orderService.subscribeToOrdersList$;
  }

  getOrders(startIndex: number) {
    this.orderService.getOrdersList$(startIndex);
  }
}
