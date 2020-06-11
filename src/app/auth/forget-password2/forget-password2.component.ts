import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Authservices } from '../../authservices';





@Component({
  selector: 'app-forget-password2',
  templateUrl: './forget-password2.component.html',
  styleUrls: ['./forget-password2.component.css']
})
export class ForgetPassword2Component implements OnInit {


  emailForm:FormGroup
  constructor(private route:Router,private fb:FormBuilder,private authservice:Authservices) { }

  ngOnInit() {
    this.validation();
    this.get_country()
  }
  validation(){
    this.emailForm=this.fb.group({
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });
  }
    getErrorMessage(FormControl,msg){
      return this.emailForm.get(FormControl).hasError ('required') ? 'you must enter '  + msg :
      this.emailForm.get('email').hasError('pattern')? 'Need valid ' + msg : '';
    
  }
  submit(){

      if(this.emailForm.value){
        this.authservice.emailForm(this.emailForm.value).subscribe(
          (res:any)=>{
            console.log(res)
          }
        )
      }
  }


  get_country(){
    this.authservice.get_country().subscribe((res:any)=>{
      console.log(res)
      console.log(res[0].name)
    })
  }
}
