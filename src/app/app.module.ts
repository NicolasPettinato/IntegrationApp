import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { ProductComponent } from './components/product/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddEditViewComponent } from './components/product/product-add-edit-view/product-add-edit-view.component';
import { CategoryAddEditViewComponent } from './components/category/category-add-edit-view/category-add-edit-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductAddEditViewComponent,
    ProductListComponent,
    CategoryAddEditViewComponent,
    CategoryListComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductComponent,
    DashboardComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
