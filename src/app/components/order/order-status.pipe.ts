import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderStatus"
})
export class OrderStatusPipe implements PipeTransform {
  transform(value: string) {
    const str = value.replace(/_/g, " ");
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }
}
