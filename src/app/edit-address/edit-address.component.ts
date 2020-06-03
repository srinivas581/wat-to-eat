import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup,ReactiveFormsModule,FormControl,FormBuilder,Validators} from '@angular/forms';
import { DeliveryAddressComponent } from '../delivery-address/delivery-address.component';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  constructor(private dialog:MatDialog,private fb:FormBuilder,public dialogRef:MatDialogRef<EditAddressComponent>) { }

  addressForm=this.fb.group({
      address:[''],
      city:[''],
      zip:[''],
      app:[''],
      state:[''],
      save:['']

    })
  ngOnInit() {
    
  }
  cancel(){
    this.dialogRef.close();
  }
  edit(){
    this.addressForm.patchValue({
      address:'1041,pencircle',
      city:'King of Persia',
      zip:'746898',
      app:'23',
      state:'PA',
      Save:'Home'
    });
  }
}
