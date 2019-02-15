import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Cart } from "../../../models/cart.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit() {
  }

}
