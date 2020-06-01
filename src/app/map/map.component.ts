import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
   
  constructor(private dialog:MatDialog,public modalRef:MatDialogRef<MapComponent>) { }



  ngOnInit() {
  }
  clear() {
    this.modalRef.close();
  }
}
