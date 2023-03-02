import { Component } from '@angular/core';
import { SubscriberServiceService } from 'src/app/Service/subscriber-service.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  constructor(private subscriberService : SubscriberServiceService){
    this.subscribeTheValue();
  }

  subscribeTheValue(){
    this.subscriberService.assignValue().subscribe((sub)=>{
      console.log(sub);
    })
  }
}
