import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {AfterViewInit, Directive, QueryList, ViewChildren} from '@angular/core';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { AddNewAddressComponent } from './add-new-address/add-new-address.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project4';

    @ViewChild(AddNewAddressComponent)
    EditAddressComponent:AddNewAddressComponent
      constructor(private route:Router) { }

  ngOnInit() {
  }
 
}
