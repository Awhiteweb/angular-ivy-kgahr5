import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IOrderViewModel } from "../order/order";
import { OrderService } from "../order/order.service";

@Component({
  selector: "rtg-dashboard",
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  ngOnInit() {}
}
