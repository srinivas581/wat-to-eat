import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-cusine-modeldialog',
  templateUrl: './cusine-modeldialog.component.html',
  styleUrls: ['./cusine-modeldialog.component.css']
})
export class CusineModeldialogComponent implements OnInit {


  
  constructor(private dialog:MatDialog,public modalRef:MatDialogRef<CusineModeldialogComponent>) { }

  ngOnInit() {
  }
clear(){
  this.modalRef.close(); 
}
}
