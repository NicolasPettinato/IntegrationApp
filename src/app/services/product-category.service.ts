import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCategory } from '../models/category,model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private apiURL = 'https://utn-avanzada2-tp-final.herokuapp.com/api/ProductCategory';

  constructor( private http: HttpClient) {     
  }

  // getall(): Promise<any>{
  //   return this.http.get(this.apiURL).toPromise();
  // }

  getall(){
    let c1 = new ProductCategory();
    let c2 = new ProductCategory();
    let c3 = new ProductCategory();
    let c5 = new ProductCategory();

    c1.productCategoryId = 1;
    c1.description = "Categoria 1";
    c2.productCategoryId = 2;
    c2.description = "Categoria 2";
    c3.productCategoryId = 3;
    c3.description = "Categoria 3";
    c5.productCategoryId = 5;
    c5.description = "Categoria 5";

    let categoryList = Array<ProductCategory>();
    categoryList.push(c1);
    categoryList.push(c2);
    categoryList.push(c3);
    categoryList.push(c5);
    return categoryList;
  }

  getById(id: number): Promise<any>{
    return this.http.get(`${this.apiURL}/${id}`).toPromise();
  }

  add(productCategory: ProductCategory ): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type':'application/json'
      })
    };

    return this.http.post(this.apiURL,productCategory,httpOptions).toPromise();
  }
}
