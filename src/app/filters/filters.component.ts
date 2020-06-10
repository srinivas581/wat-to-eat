import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CusineModeldialogComponent } from '../cusine-modeldialog/cusine-modeldialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router,Route } from '@angular/router';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;

  constructor(public dialog:MatDialog,private route:Router) {}
  
  rating3:any  

  ngOnInit() {
    // this.inputName = this.itemId + '_rating';
    
  } 
  
  house1(){
    this.route.navigate(['/house1'])
  }
  onClick(rating: number): void {
    console.log(rating)
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
  cusines():void{
      const dialogRef=this.dialog.open(CusineModeldialogComponent,{
        width:'500px',
        data:{ }
      });
    
      dialogRef.afterClosed().subscribe(result=>{
      console.log('selected');
    });
}

}


