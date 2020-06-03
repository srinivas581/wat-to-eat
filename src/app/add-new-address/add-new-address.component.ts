import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.css']
})
export class AddNewAddressComponent implements OnInit {

  constructor(private dialgo:MatDialog,public dialogRef:MatDialogRef<AddNewAddressComponent>) { }

  ngOnInit() {
  }
  cancel(){
    this.dialogRef.close();
  }
}
