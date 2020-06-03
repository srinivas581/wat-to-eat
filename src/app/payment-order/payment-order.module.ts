import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes, Router} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';



import { PaymentOrderComponent } from './payment-order.component';
import { MatRadioModule} from '@angular/material/radio';


const router:Routes=[
    {path:'',component:PaymentOrderComponent}
]


@NgModule({
    declarations: [
        PaymentOrderComponent
     
      
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forChild(router),
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule, 
      MatDialogModule,
      MatRadioModule
      
      
      
    ],
    providers: [],
  
    bootstrap: []
  })
  export class PaymentOrderModule { }