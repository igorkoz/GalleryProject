import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { MatLineSetter } from '@angular/material/core';
import { Router } from "@angular/router";
import { Cart } from "../../../models/cart.model";
import { Product } from "../../../models/product.model";


export interface myDictionary { [index: string]: boolean; } 

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})

export class ImagesComponent implements OnInit {

  public greetings = false;
  public categories: string[];
  public products: Product[];
  public checkedMap: myDictionary;

  private filters: string[];
  // Repository
  private tiles: Product[] = [
    { text: 'assets/salerepos/1.jpg', cols: 2, rows: 3, color: 'lightblue', id: 1, price: 500, cat: "animal" },
    { text: 'assets/salerepos/2.jpg', cols: 2, rows: 3, color: 'lightgreen', id: 2, price: 600, cat: "landscape" },
    { text: 'assets/salerepos/3.jpg', cols: 2, rows: 3, color: 'lightpink', id: 3, price: 700, cat: "pantheon" },
    { text: 'assets/salerepos/4.jpg', cols: 2, rows: 3, color: '#DDBDF1', id: 4, price: 800, cat: "landscape" }
  ];
  
  constructor(private auth: AuthService, private cart: Cart,
    private router: Router) {

    if (this.auth.authenticated) {
      this.greetings = true;
      //set background
    }
    else {
      this.greetings = false;
    }

    this.filters = [];

    this.categories = this.removeDups(this.tiles.map(p => p.cat));
    //this.categories.push("all");
    this.categories.sort();

    this.products = this.getProducts(this.filters);
    
    this.checkedMap = { "all": false };
    for (let i = 0; i < this.categories.length; i++) {
      this.checkedMap[this.categories[i]] = false;
    }
  }

  ngOnInit() {
  }
  

  getProducts(categories: string[]): Product[] {
    if (categories.length == 0) {
      return this.tiles;
    }
    else {
      return this.tiles.filter(p => this.filters.includes(p.cat));
    }
  }

  getProduct(id: number): Product {
    return this.tiles.find(p => p.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }

  public applyFilter(evt: any) {

    if (evt.checked) {

      switch (evt.source.name) {
        case "all": {
          debugger;
          evt.checked = false;
          this.filters = [];
          for (let i = 0; i < this.categories.length; i++) {
            this.checkedMap[this.categories[i]] = false;
          }
          //var container = document.querySelector("mat-drawer");
          //var matches = container.querySelectorAll("mat-checkbox");
          break;
        }
        default: {
          this.filters.push(evt.source.name);
          break;
        }
      }
    }
    else {
      let index: number = this.filters.indexOf(evt.source.name);
      if (index !== -1) {
        this.filters.splice(index, 1);
      }        
    }

    this.products = this.getProducts(this.filters);

  }

  public addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/images/cart");
  }

  private removeDups(names: string[]): string[]  {
    let unique = {};
    names.forEach(function (i) {
      if (!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

}
