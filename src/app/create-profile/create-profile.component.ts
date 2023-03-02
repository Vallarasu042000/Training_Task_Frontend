import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PopupComponent } from './popup/popup.component';

export interface Element {
  name: string;
  email: string;
  phone: string;
  dob: string;
}
const ELEMENT_DATA: Element[]=[];

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})

export class CreateProfileComponent implements OnInit{

  displayedColumns = ['name', 'email', 'phone', 'dob'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  tableElement :Element;
  empFormGrp !:FormGroup;
  userFormgrp!:FormGroup;
  name:any;
  email:any;
  phone:any;
  res: any;
  formValue: any []=[];
  constructor(public dialog: MatDialog,public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    debugger;
  this.empFormGrp = this.formBuilder.group ({
   
      name : new FormControl(null,[Validators.required,Validators.minLength(4)]),
      email : new FormControl(null,[Validators.required,Validators.email]),
      phone : new FormControl(null),
      dob : new FormControl(null),
   
   
    // skils :new FormArray([
    //   new FormControl(1),
    //   new FormControl(2),
    //   new FormControl(3),
    // ])
  })
 
  }
  
  onSumbit(){
    this.openDialog();
  }
  clickSubmit(){

  }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '450px',
      height:'150px',
      data: {name: this.name, email: this.email,phone:this.phone}
    });

    dialogRef.afterClosed().subscribe(result => {
     
     if(result.save === true){
      this.getFormValidationValue();
     }
    });
 }
 getFormValidationValue(){
      let res = this.empFormGrp.value
        this.emptyValue();
        this.tableElement.name = res.name,
        this.tableElement.email= res.email,
        this.tableElement.phone = res.phone,
        this.tableElement.dob = res.dob 
        this.formValue.push( this.tableElement)
        ELEMENT_DATA.push( this.tableElement);
        this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA); 
 }

  emptyValue(){
    this.tableElement ={
      name:"",email : "",phone:"",dob:""
    }
  }

}















//   userGroup:FormGroup;
//   name = new FormControl;

//   ngOnInit(): void {
//     this.userGroup = new FormGroup({
//       name: new FormControl('',[Validators.required]),
//       email: new FormControl('',[Validators.required,Validators.email]),
//       dob: new FormControl('',[Validators.required]),
//       address: new FormControl('')
//     })
    
//  }
//  onSumbit(){
//   console.log(this.userGroup);
//  }
//  ClickedSubmit(){

//  }
  

