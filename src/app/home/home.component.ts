import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }
  signup(){
    this.route.navigate(['/auth/signup'])
  }
  filters(){
    this.route.navigate(['/filters'])
  }
}
