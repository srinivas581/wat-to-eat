import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeliveryAddressComponent } from '../delivery-address/delivery-address.component';



@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(public diaog:MatDialog) { }

  ngOnInit() {
  }
  openDialog(){
    const dialogRef=this.diaog.open(DeliveryAddressComponent,{
      
      width:'675px',
    
      data:{ }
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('address')
    });
  }
}
