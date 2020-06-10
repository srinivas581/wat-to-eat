import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// import { MustMatch } from '../../_helpers/must-match.validators';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  hide=true;
  passwordForm:FormGroup
  constructor(private route:Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.validation()

    }
   validation(){
    this.passwordForm=this.fb.group({
      password:['',[Validators.required]],
      confirmpassword:['',[Validators.required]],
    });

    }
    getErrorMessage(FormControl,msg){
      return this.passwordForm.get(FormControl).hasError ('required') ? 'you must enter '  + msg :
      this.passwordForm.get(FormControl).hasError('pattern')? 'valid ' + msg : ''; 

    }
    save(){
      
      if(this.passwordForm.value.password==this.passwordForm.value.confirmpassword){
        console.log(this.passwordForm.value)
        
      }
      else{
        alert('Password must match');
      }
    }
}
