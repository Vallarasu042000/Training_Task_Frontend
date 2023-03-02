import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.css']
})
export class FormfieldComponent  implements OnInit {
  empFormGrp !:FormGroup;
  ngOnInit(): void {
  this.empFormGrp = new FormGroup({
    name : new FormControl(null,Validators.required),
    email : new FormControl(null,[Validators.required,Validators.email]),
    phone : new FormControl(null),
    password : new FormControl(null),
    skils :new FormArray([
      new FormControl(1),
      new FormControl(2),
      new FormControl(3),
    ])
  })
 
  }
  onSumbit(){
    console.log(this.empFormGrp)
  }
}
