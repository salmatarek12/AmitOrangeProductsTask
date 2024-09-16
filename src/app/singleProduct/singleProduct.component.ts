import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleProduct',
  templateUrl: './singleProduct.component.html',
  styleUrls: ['./singleProduct.component.css']
})
export class SingleProductComponent implements OnInit {

  product :any = {};
  pid ?:any;

  httpclient = inject(HttpClient)
  fetchData(){
    this.httpclient.get('https://fakestoreapi.com/products/'+this.pid).subscribe((response)=>{
      this.product = response; 
    })
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.pid = this.route.snapshot.paramMap.get('pid');
    console.log("this.pid: ",this.pid);
    this.fetchData()
  }

}
