import { Component, Input, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/category,model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productList = Array<Product>();
  
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getall()
    .then(response =>{
      this.productList = response;
    })
    .catch(error =>{
      console.error();
    })

  }
}
