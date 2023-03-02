import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/Service/data-service.service';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component {
  Component2Data: any = '';
  constructor(private DataSharing: DataServiceService) {
    DataSharing.sharingData.subscribe((res: any) => {  
      this.Component2Data = res;
    })
  }
  ngOnInit(): void {
  }
  onSubmit(data: any) {
    this.DataSharing.changeDataSubject(data);
  }
}

