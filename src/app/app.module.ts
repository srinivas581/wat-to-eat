import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgOtpInputModule } from  'ng-otp-input';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';


import { AppComponent } from './app.component';
import { RouterModule,Routes} from "@angular/router";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { FiltersComponent } from './filters/filters.component';
import { CusineModeldialogComponent } from './cusine-modeldialog/cusine-modeldialog.component';
import { HouseComponent } from './house/house.component';
import { House1Component } from './house1/house1.component';
import { MapComponent } from './map/map.component';
import { SelectCusineComponent } from './select-cusine/select-cusine.component';
import { MatRadioModule } from '@angular/material/radio';
import { SpecialPizzaComponent } from './special-pizza/special-pizza.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { AddNewAddressComponent } from './add-new-address/add-new-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { DeliveryInstructionsComponent } from './delivery-instructions/delivery-instructions.component';
import { PaymentOrderComponent } from './payment-order/payment-order.component';
import { AccountCreditsComponent } from './account-credits/account-credits.component';



// import { CampaignsComponent } from './campaigns/campaigns.component';


const router:Routes=[
  {path:'home',component:HomeComponent},
  {path:'auth',loadChildren:'./auth/auth.module#AuthModule'},
  {path:'footer',component:FooterComponent},
  {path:'profile',component:ProfileComponent},
  {path:"filters",component:FiltersComponent},
  {path:"cusine",component:CusineModeldialogComponent},
  {path:"house",component:HouseComponent},
  {path:"house1",component:House1Component},
  {path:"map",component:MapComponent},
  {path:"select_cusine",component:SelectCusineComponent},
  {path:"special_pizza",component:SpecialPizzaComponent},
  {path:"place_order",component:PlaceOrderComponent},
  {path:"deliver_address",component:DeliveryAddressComponent},
  {path:"add_address",component:AddNewAddressComponent},
  {path:"edit_address",component:EditAddressComponent},
  {path:"instructions",component:DeliveryInstructionsComponent},
  {path:'payment',component:PaymentOrderComponent},
  {path:"account",component:AccountCreditsComponent}
  

  
  
]



@NgModule({  
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    FiltersComponent,
    CusineModeldialogComponent,
    HouseComponent,
    House1Component,
    MapComponent,
    SelectCusineComponent,
    SpecialPizzaComponent,
    PlaceOrderComponent,
    DeliveryAddressComponent,
    AddNewAddressComponent,
    EditAddressComponent,
    DeliveryInstructionsComponent,
    PaymentOrderComponent,
    AccountCreditsComponent
    
   
    // CampaignsComponent,
  
  ],
  

  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    NgOtpInputModule,
    MatInputModule,
    MatCardModule,  
    MatIconModule,
    MatRadioModule,
    MatStepperModule

    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
