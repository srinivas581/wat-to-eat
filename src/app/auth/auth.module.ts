import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgOtpInputModule } from 'ng-otp-input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';





import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { ForgetPassword2Component } from './forget-password2/forget-password2.component';
import { InterceptorModule } from '../interceptor/interceptor.module';


const router:Routes=[
 
  {path:'', component:AuthComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"phone",component:PhoneNumberComponent},
    {path:"verify-phone",component:ForgetPasswordComponent},
    {path:"reset",component:ResetPasswordComponent},
    {path:"reset/:id/:token",component:ResetPasswordComponent},
    {path:"forget-password2",component:ForgetPassword2Component}
  ]},
  
]


@NgModule({  
    declarations: [
        AuthComponent,
        LoginComponent,
        SignupComponent,
        ForgetPasswordComponent,
        ResetPasswordComponent,
        PhoneNumberComponent,
        ForgetPassword2Component
    ],
    
  
    imports: [
      CommonModule,
      RouterModule.forChild(router),
      FormsModule,
      ReactiveFormsModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule ,
      MatIconModule,
      NgOtpInputModule,
      MatCardModule,
      MatButtonModule,
      InterceptorModule
      
    ],
    providers: [],
    bootstrap:[]
  })
  export class AuthModule { }