import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Authservices } from '../../authservices';
// import { MustMatch } from '../../_helpers/must-match.validators';





@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  hide=true;
  passwordForm:FormGroup

  id:any
  token:any
  constructor(private route:Router,private fb:FormBuilder,private activated:ActivatedRoute,private authservice:Authservices) { }

  ngOnInit() {
    this.activated.params.subscribe(params=>{
      console.log(params['id'])
      console.log(params['token'])
      this.id=params['id']
      this.token=params['token']
    })
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
        this.authservice.resetPassword(this.id,this.token,this.passwordForm.value).subscribe(
          (res:any)=>{
            console.log(res)
            
          }
        )
      }
      else{
        alert('Password must match');
      }
      console.log(this.passwordForm.value)
    }
    
}
