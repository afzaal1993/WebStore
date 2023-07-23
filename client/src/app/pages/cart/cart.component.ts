import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        price: 150,
        quantity: 3,
        id: 2,
      },
    ],
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor() {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prevValue, currValue) => prevValue + currValue, 0);
  }

  //The reduce function takes the array of costs obtained from the map function as its first argument.
  //It also takes a callback function as its second argument. This callback function has two parameters: prevValue and currValue.
  //prevValue represents the accumulated value obtained from the previous iteration (or the initial value if it's the first iteration).
  //currValue represents the current value in the array being processed (in this case, the individual cost for each item).
  //The callback function performs the summation operation by adding currValue to the prevValue.
  //The reduce function continues this process until it has processed all the elements in the array.
  //The final result is the accumulated sum, which represents the total cost of all items in the shopping cart.
}
