import { Component } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-main-tap',
  templateUrl: './main-tap.component.html',
  styleUrls: ['./main-tap.component.css']
})
export class MainTapComponent {
  matMenu:string="Codeboard Technologies"
  panelOpenState = false;
  userForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })  
  }
  
  get getControl(){
    return this.userForm.controls;
  }
  
  onSubmit(){
    console.log(this.userForm);
  }
}
