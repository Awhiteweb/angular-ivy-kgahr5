import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { OrderStatusPipe } from "./components/order/order-status.pipe";
import { AppRoutingModule } from "./app.routing";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { OrderListComponent } from "./components/order/list/order-list.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderListComponent,
    OrderStatusPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
