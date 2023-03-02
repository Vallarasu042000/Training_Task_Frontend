import { Component ,Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name:string
 }
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
 

  constructor( public dialogRef: MatDialogRef<PopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  SubmitonClick(){
    this.dialogRef.close();
  }
  
}

