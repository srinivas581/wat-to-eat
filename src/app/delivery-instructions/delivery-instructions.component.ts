import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
MatDialog
MatDialogRef
@Component({
  selector: 'app-delivery-instructions',
  templateUrl: './delivery-instructions.component.html',
  styleUrls: ['./delivery-instructions.component.css']
})
export class DeliveryInstructionsComponent implements OnInit {

  constructor(private dialog:MatDialog,public dialogRef:MatDialogRef<DeliveryInstructionsComponent>) { }

  ngOnInit() {
  }
  cancel(){
    this.dialogRef.close();
  }
}
