import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgOtpInputModule } from  'ng-otp-input';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


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


// import { CampaignsComponent } from './campaigns/campaigns.component';


const router:Routes=[
  {path:'home',component:HomeComponent},
  {path:'auth',loadChildren:'./auth/auth.module#AuthModule'},
  {path:'footer',component:FooterComponent},
  {path:'profile',component:ProfileComponent},
  {path:"filters",component:FiltersComponent}

  
  
]



@NgModule({  
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    FiltersComponent
    
   
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
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
