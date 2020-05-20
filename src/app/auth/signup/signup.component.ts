import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  hide=true;
  constructor(public route:Router) { }

  ngOnInit() {
  }
  login(){
    this.route.navigate(['/auth/login'])
  }
}
