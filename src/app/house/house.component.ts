import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapComponent } from '../map/map.component';
import { SelectCusineComponent } from '../select-cusine/select-cusine.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor( private dialog:MatDialog ,public dialog1:MatDialog,public route:Router) { }

  ngOnInit() {
  }
  openDialog():void{

      const dialogRef=this.dialog.open(MapComponent,{
      width:'500px',
      height:'94%',
      data:{},
      backdropClass: 'backdropBackground'
    
    });
dialogRef.afterClosed().subscribe(result =>{
  console.log('address')
});
  }

  openDialog1():void{
    const dialogRef=this.dialog1.open(SelectCusineComponent,{
      width:'500px',
      height:'94%',
      data:{},
    });
  }
  place(){
    this.route.navigate(['/place_order'])
  }
}
