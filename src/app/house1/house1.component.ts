import { Component, OnInit } from '@angular/core';
import { Router,Route } from '@angular/router';

@Component({
  selector: 'app-house1',
  templateUrl: './house1.component.html',
  styleUrls: ['./house1.component.css']
})
export class House1Component implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }
  house(){
    this.route.navigate(['/house'])
  }
}
