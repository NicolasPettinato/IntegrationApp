import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryAddEditViewComponent } from './components/category/category-add-edit-view/category-add-edit-view.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductAddEditViewComponent } from './components/product/product-add-edit-view/product-add-edit-view.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'product/add', component: ProductAddEditViewComponent },
  { path: 'product/view/:id', component: ProductAddEditViewComponent },
  { path: 'product/edit/:id', component: ProductAddEditViewComponent },
  { path: 'category/add', component: CategoryAddEditViewComponent},
  { path: 'category/view/:id', component: CategoryAddEditViewComponent},
  { path: 'category/edit/:id', component: CategoryAddEditViewComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component : PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
