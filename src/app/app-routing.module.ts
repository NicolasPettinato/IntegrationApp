import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { HomeComponent } from './components/common/home/home.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductComponent } from './components/product/product/product.component';
import { ProductCategory } from './models/category,model';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'product/view/:id', component: ProductComponent },
  // { path: 'product/edit/:id', component: ProductComponent }
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component : PageNotFoundComponent },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
