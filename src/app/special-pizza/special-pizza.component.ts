import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-special-pizza',
  templateUrl: './special-pizza.component.html',
  styleUrls: ['./special-pizza.component.css']
})
export class SpecialPizzaComponent implements OnInit {

  constructor(private dialog:MatDialog,public dialogRef:MatDialogRef<SpecialPizzaComponent>) { }

  ngOnInit() {
  }
  clear(){
    this.dialogRef.close();
  }
}
