import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule,Routes} from "@angular/router";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";



import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatLabel } from '@angular/material';






const router:Routes=[

    {path:"user",component:UsersComponent},
    {path:"user-details",component:UserDetailsComponent}

]



@NgModule({  
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent, 
 
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    AngularFontAwesomeModule,
    FormsModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
      


  ],
  providers: [

   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
