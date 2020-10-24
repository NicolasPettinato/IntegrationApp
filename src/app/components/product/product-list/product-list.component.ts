import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/category,model';
import { Product } from 'src/app/models/product.model';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList = Array<Product>();
  categoryList = Array<ProductCategory>();

  constructor(private productService : ProductService, private categoryService: ProductCategoryService) { }

  ngOnInit(): void {

    //listado productos
    this.productService.getall()
    .then(response =>{
      this.productList = response;      
    })
    .catch(error =>{
      console.error(error);
      window.alert('No anda la concha de tu madre!!');
    })

    // //listado categorias
    // this.categoryService.getall()
    // .then(response =>{
    //   this.categoryList = response;
    // })
    // .catch(error =>{
    //   console.error(error);
    // })

    for (let i = 0; i < this.productList.length; i++) {
        for (let e = 0; e < this.categoryList.length; e++) {
            if (this.productList[i].productCategoryId == this.categoryList[e].productCategoryId){
                 this.productList[i].productCategoryName = this.categoryList[e].description;     
            }
        }
    }

  }

  delete(id:number){
    this.productService.delete(id)
    .then(response =>{
      window.alert(`El producto ${id} se elimino correctamente`);
      this.ngOnInit();
    })
    .catch(error =>{
      console.error(error);
    });
  }
}


