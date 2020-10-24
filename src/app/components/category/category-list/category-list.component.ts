import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/category,model';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryList = Array<ProductCategory>();

  constructor(private categoryService: ProductCategoryService) { }

  ngOnInit(): void {
    
    this.categoryList = this.categoryService.getall()
    // .then(response =>{
    //   this.categoryList = response;
    // })
    // .catch(error =>{
    //   console.error(error);
    // })
  }
}
