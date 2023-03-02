import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { DemoBehaviour } from 'src/app/Service/behavior';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements AfterViewInit {

  constructor(private elRef: ElementRef,private behavior:DemoBehaviour) {
  }
  ngAfterViewInit() {
    this.test();
   this.elRef.nativeElement.style.color = 'red';
  }
  change(changedColor: String) {
    this.behavior.auditcaseFormStatus.subscribe((res)=>{
      console.log(res);
    })
   return this.elRef.nativeElement.style.color = changedColor;

  }
  test(){
    return "hello";
  }
}
