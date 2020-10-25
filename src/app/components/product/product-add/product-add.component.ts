import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/category,model';
import { Product } from 'src/app/models/product.model';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productCategoryId: number;
  name: string;
  description: string;
  price: number;
  message:string;

  categories: Array<ProductCategory>;

  constructor(private productService: ProductService, private categoryService: ProductCategoryService) { }

  ngOnInit(): void {
    
    this.categories = this.categoryService.getall()
    // .then(response =>{
    //    this.categories = response;
    // })
    // .catch(error =>{
    //   console.log(error);  
    // })
  
  }

  addProduct(){
    
    let select = document.getElementsByTagName("select");
    let selected = select[0].options.selectedIndex - 1
  
    if( selected >= 0){
       this.productCategoryId = this.categories[selected].productCategoryId
    }else{
      window.alert("Seleccione una categoria");
      return false;
    }
    
    let product = new Product();
    product.productCategoryId = this.productCategoryId;
    product.name = this.name;
    product.description = this.description;
    product.price = this.price;

    this.productService.add(product)
      .then(response  => {
        this.message = "Product successfully added";
      })
      .catch(error =>{
        this.message = "An error has occurred!";
      })
  }

}
