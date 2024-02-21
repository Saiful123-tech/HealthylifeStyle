import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainerAuthComponent } from './trainer-auth/trainer-auth.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { AuthGuard } from './auth.guard';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FindTrainerComponent } from './find-trainer/find-trainer.component';
import { UpdateAuthComponent } from './update-auth/update-auth.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'trainer',
    component:TrainerAuthComponent
  },
  {
    path:'trainer-dashboard',
    component:TrainerDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user',
    component:UserAuthComponent
  },
  {
    path:'findtrainer',
    component:FindTrainerComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Update/:id',
    component:UpdateAuthComponent
  },
  {
    path:'admin',
    component:AdminAuthComponent
  },
  {
    path: 'addProduct',
    component:AddProductComponent
  },
  {
    path: 'productDashboard',
    component:ProductDashboardComponent
  },
  {
    path: 'addCart',
    component:CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
