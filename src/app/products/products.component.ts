import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  httpclient = inject(HttpClient)
  productsArray :any[] = [];

  fetchData(){
    this.httpclient.get('https://fakestoreapi.com/products').subscribe((response:any)=>this.productsArray= response)
  }
  ngOnInit() {
    this.fetchData();
  }

}
