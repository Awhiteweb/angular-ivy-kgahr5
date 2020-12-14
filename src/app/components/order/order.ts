export type OrderStatus =
  | "pending_payment"
  | "paid"
  | "ready_for_delivery"
  | "completed";

export interface IOrderViewModel {
  id: string;
  address: string;
  name: string;
  qty: number;
  status: OrderStatus;
}
