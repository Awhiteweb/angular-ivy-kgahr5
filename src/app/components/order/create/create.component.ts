import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { nanoid } from "nanoid";
import { OrderService } from "../order.service";

@Component({
  selector: "rtg-order-create",
  templateUrl: "./create.component.html"
})
export class OrderCreateComponent implements OnInit {
  form: FormGroup;
  quantities: number[] = [1];

  constructor(private fb: FormBuilder, private orderService: OrderService) {}

  ngOnInit() {
    //ts::ignore
    this.quantities = [...Array(10)].map((k, i) => i + 1);
    this.fb.group({
      id: [nanoid(), Validators.required],
      name: ["", Validators.required],
      qty: [1, Validators.required],
      address: ["", Validators.required]
    });
  }

  async createOrder() {
    const id = await this.orderService.createOrder(this.form.value);
    console.log(id);
  }

  addAddress() {
    // trigger model to add an address and return the id to go with this order
    this.form["address"] = "123";
  }
}
