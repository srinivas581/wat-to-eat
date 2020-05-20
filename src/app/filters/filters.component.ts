import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}
    // this.rating3 = 0;
    

  ngOnInit() {
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }
   
  
  
}
 