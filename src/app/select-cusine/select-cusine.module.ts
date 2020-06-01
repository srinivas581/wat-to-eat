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
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { SelectCusineComponent } from './select-cusine.component';


const router:Routes=[
    {path:'',component:SelectCusineComponent}
]


@NgModule({
    declarations: [
        SelectCusineComponent
     
      
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
      MatRadioModule,
      MatCheckboxModule
      
      
      
    ],
    providers: [],
  
    bootstrap: []
  })
  export class SelectCusineModule { }