import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input('common')  project_details!:string;
  @Output() project = new EventEmitter();
  sortingFilterArray:any=[
    { name:"caseNumberRef",columnName:"caseNumber",condition:"Like",type:"String"},
    { name:"instituitionRef",columnName:"msIns.msInsNme",condition:"Like",type:"String"},
    { name:"businessUnitRef",columnName:"msBu.msBusNme",condition:"Like",type:"String"},]
  buttonClicked(){
   // this.sortingFilterArray;
    this.project.emit("caseNumberRef");
  }

}
