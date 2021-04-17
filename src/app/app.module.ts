import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { ColorComponent } from './components/color/color.component';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarRentalDetailDtoComponent } from './components/car-rental-detail-dto/car-rental-detail-dto.component';
import { CustomerdetaildtoComponent } from './components/customerdetaildto/customerdetaildto.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    CarimageComponent,
    ColorComponent,
    UserComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CardetailComponent,
    CarRentalDetailDtoComponent,
    CustomerdetaildtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
