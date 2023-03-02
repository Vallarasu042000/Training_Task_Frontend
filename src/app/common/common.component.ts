import { Component ,Input, OnInit, ViewChild} from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { TableComponent } from './table/table.component';


@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

 
// constructor(private table:TableComponent){
//   console.log("constructor cal :"+table);
// }

  ngOnInit(): void {
    // this.myObserable.subscribe((val) =>{
    //   console.log(val);
    // })

  }

  
 project:string = "cbg";
 caseNumber:String="caseNumberRef";
  colorChanged:boolean=false;
 eventEmmitted(e:any){
  console.log(e)
  if(e == this.caseNumber){
    this.colorChanged = !this.colorChanged ;
  }
 
 }
//  myObserable = new Observable((Observer) =>{ 
//     Observer.next("1");
//     Observer.next("2");
//     Observer.next("3");

//  })

}
