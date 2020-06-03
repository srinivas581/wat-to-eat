import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddNewAddressComponent } from '../add-new-address/add-new-address.component';
import { EditAddressComponent } from '../edit-address/edit-address.component';



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
    const dialogRef=this.dialog.open(EditAddressComponent,{
      width:'500px',
      data:{ }
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('edit address')
    })
  }
  openDialog1(){
    const dialogRef=this.dialog.open(AddNewAddressComponent,{
      width:'500px',
      data:{ }

    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('address form');
    });
  }
}
