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


import { FiltersComponent } from './filters.component';


const router:Routes=[
    {path:'',component:FiltersComponent}
]


@NgModule({
    declarations: [
        FiltersComponent
     
      
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
      MatDialogModule
      
      
      
    ],
    providers: [],
  
    bootstrap: []
  })
  export class FiltersModule { }