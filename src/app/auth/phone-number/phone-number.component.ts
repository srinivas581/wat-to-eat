import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  
  constructor(public route:Router) { }
  

  ngOnInit() {
  }
  forget(){
    this.route.navigate(['/auth/forget'])
  }
}
