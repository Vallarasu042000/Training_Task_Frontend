import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

export interface DialogData {
  name: string;
}
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  name!:string;
  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
   
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
      data: {name:this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      let res = result;
    });
  }
}


