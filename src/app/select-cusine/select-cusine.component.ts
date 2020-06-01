import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SpecialPizzaComponent } from '../special-pizza/special-pizza.component';


@Component({
  selector: 'app-select-cusine',
  templateUrl: './select-cusine.component.html',
  styleUrls: ['./select-cusine.component.css']
})
export class SelectCusineComponent implements OnInit {

  public inputModel:number=10;
  constructor(private dialog:MatDialog,public modalRef:MatDialogRef<SelectCusineComponent>) { }

 

  ngOnInit() {

  }
  increment(){
     
    console.log(this.inputModel++)
  }
  decrement(){
    console.log(this.inputModel--)
  }
  reset(){
    this.inputModel=0;
  }
  cancel(){
    this.modalRef.close();
  }
  openDilaog(){
const dialogRef=this.dialog.open(SpecialPizzaComponent,{

    width:'500px',
    data:{ }
});
    dialogRef.afterClosed().subscribe(result=>{
      console.log('image closed');
    });
  }
}
