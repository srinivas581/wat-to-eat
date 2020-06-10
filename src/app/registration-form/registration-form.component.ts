import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup,ReactiveFormsModule,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ModelDialogComponent } from '../model-dialog/model-dialog.component';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent  {


  // submissionForm=new FormGroup({
  //   name:new FormControl(''),
  //   email:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     doorNo:new FormControl(''),
  //     nagar:new FormControl(''),
  //     city:new FormControl(''),       
  //     postalcode:new FormControl(''),
  //     street:new FormControl(''), 
  //     area:new FormControl(''),
  //     state:new FormControl('')
  //   })  
  // });
  
  get name(){
    return this.submissionForm.get('name');
  }
  constructor(public dialog:MatDialog,private fb:FormBuilder) { }
    
  submissionForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    email:['nvrsai06@gmail.com'],
    password:[''],
    confirmPassword:[''],  
    address:this.fb.group({
      doorNo:[''],
      nagar:[''],
      city:[''],
      postalcode:[''],
      street:[''],
      area:[''],
      state:['']
    })

  })
  // ngOnInit() {
  // }
openDialog(): void {
    const dialogRef = this.dialog.open(ModelDialogComponent, {
      width: '500px',
      data: {}
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  loadApi(){
    this.submissionForm.patchValue({
      name:'Adithya',
      email:'nvrsai06@gmial.com',
      password:'qwerty',
      confirmPassword:'qwerty',
      address:{
        doorNo:'56',
        nagar:'vivekananda',
        city:'Tirupathi', 
        postalcode:'517505',
        street:'First Street', 
        area:'Staff Quartes', 
        state:'Andhra Pradesh'
        
      }
      
    });
    console.log(this.submissionForm.value);
  }
  
}
