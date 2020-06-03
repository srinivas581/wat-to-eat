import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-account-credits',
  templateUrl: './account-credits.component.html',
  styleUrls: ['./account-credits.component.css']
})
export class AccountCreditsComponent implements OnInit {

  constructor(private dialog:MatDialog,public dialogRef:MatDialogRef<AccountCreditsComponent>) { }

  ngOnInit() {
  }
  cancel(){
    this.dialogRef.close();
  }
}
