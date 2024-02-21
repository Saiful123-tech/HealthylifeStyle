import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrainerAuthComponent } from './trainer-auth/trainer-auth.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FindTrainerComponent } from './find-trainer/find-trainer.component';
import { UpdateAuthComponent } from './update-auth/update-auth.component';
import { BookAppoitmentComponent } from './book-appoitment/book-appoitment.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TrainerAuthComponent,
    TrainerDashboardComponent,
    UserAuthComponent,
    FindTrainerComponent,
    UpdateAuthComponent,
    BookAppoitmentComponent,
    AdminAuthComponent,
    AddProductComponent,
    ProductDashboardComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
