import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeliveryAddressComponent } from '../delivery-address/delivery-address.component';
import { DeliveryInstructionsComponent } from '../delivery-instructions/delivery-instructions.component';
import { PaymentOrderComponent } from '../payment-order/payment-order.component';
import { AccountCreditsComponent } from '../account-credits/account-credits.component';




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
  instructions(){
    const dialogRef=this.diaog.open(DeliveryInstructionsComponent,{
       width:'400px',
       data:{ }
       
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('delivery instructions')
    });
  }
  payment(){
    const dialogRef=this.diaog.open(PaymentOrderComponent,{
      width:'400px',
      data:{ }
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('paymetn gae way')
    });
  }
  account(){
    const dialogRef=this.diaog.open(AccountCreditsComponent,{
      width:'400px',
      data:{ }
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('account credits')
    });
  }
}
