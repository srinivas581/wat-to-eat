import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Authservices } from '../../authservices';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide=true;
  public loginForm:FormGroup
  constructor(private route:Router,private fb:FormBuilder,private authservice:Authservices) { }

  
  ngOnInit() {
    this.validation();
  }
  validation(){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:['',[Validators.required]]
    })
  }


  getErrorMessage(FormControl,msg){
    return this.loginForm.get(FormControl).hasError ('required') ? 'you must enter '  + msg :
    this.loginForm.get('email').hasError('pattern')? 'Need valid ' + msg : '';
  }





  login(){
    console.log(this.loginForm.value)
    if(this.loginForm.value){
      this.authservice.login(this.loginForm.value).subscribe(
        (res:any)=>{
        console.log(res)
        Swal.fire({
          title: 'Success',
          text: res.message,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.loginForm.reset();
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
      alert('please fill the fileds')
    }
   
  }
  // filter(){
  //   this.route.navigate(['/filters'])
  // }
}
