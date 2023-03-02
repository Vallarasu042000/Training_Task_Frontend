import { Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @ViewChild(Child1Component)
  private childComponent = {} as Child1Component;

 
  changeColor(color:string){
    this.childComponent.change(color);
  }
  demo(){
   console.log(this.childComponent.test());
  }
}
