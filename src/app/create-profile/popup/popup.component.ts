import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/pop-up/pop-up.component';
import { CreateProfileComponent } from '../create-profile.component';
import {  Inject } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  constructor(public dialogRef: MatDialogRef<CreateProfileComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData ) {}

  onNoClick(): void {
    this.dialogRef.close({exit:true});
  }
  saveButton(){
    this.dialogRef.close({save:true});
  }
}
