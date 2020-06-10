import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Authservices } from '../../authservices';
import Swal from 'sweetalert2';
// import { MustMatch } from '../../_helpers/must-match.validators';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  [x: string]: any;
 
  hide=true;
  public signupForm:FormGroup

  constructor(public route:Router,private fb:FormBuilder,private authservice:Authservices) { }
 
 
  ngOnInit() {
    this.validation();
  }
  validation(){
    this.signupForm=this.fb.group({
      name:['',[Validators.required,Validators.maxLength(20),Validators.pattern('.*[a-z A-Z].*')]],
      phone:['',[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:['',[Validators.required]],
      confirmpassword:['',[Validators.required]]
    });
  }
  getErrorMessage(FormControl,msg){
    return this.signupForm.get(FormControl).hasError ('required') ? 'you must enter '  + msg :
    this.signupForm.get('name').hasError('maxlength')? 'must have below the 20 charecters and alphabets only':
    this.signupForm.get(FormControl).hasError('maxlength')? 'must have below the 10 charecters':
    this.signupForm.get('name').hasError('pattern')? 'alphabets only': 
    this.signupForm.get('email').hasError('pattern')? 'Need valid ' + msg : 
    this.signupForm.get('password').hasError('pattern')? 'valid ' + msg : 
    this.signupForm.get('confirmpassword').hasError('pattern')? 'valid ' + msg : '' ;

  }
   

  signup(){
    console.log(this.signupForm.value)
    if(this.signupForm.value){
      if(this.signupForm.value.password==this.signupForm.value.confirmpassword){
        this.authservice.signup(this.signupForm.value).subscribe(
          (res:any)=>{
          console.log(res)
          Swal.fire({
            title: 'Success',
            text: res.message,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.signupForm.reset();
          this.route.navigate(['/auth/login'])  
        },
        (err)=>{
          console.log(err.error.message)
          Swal.fire({
            title: 'Error',
            text: err.error.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        })
      }
      else{
        alert('password should match')
      }
     
    }
    else{
      alert('please fill the fileds')
    }
    
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
