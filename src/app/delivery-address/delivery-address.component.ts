import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.css']
})
export class DeliveryAddressComponent implements OnInit {

  constructor(private dialog:MatDialog,public  dialogRef:MatDialogRef<DeliveryAddressComponent>) { }

  ngOnInit() {
  }
  clear(){
    this.dialogRef.close();
  }
  edit(){
    
  }
}
