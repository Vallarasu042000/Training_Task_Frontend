import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/Service/data-service.service';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {

  Component1Data: any = '';
  constructor(private DataSharing: DataServiceService) {
    DataSharing.sharingData.subscribe((res: any) => {
      this.Component1Data = res;
    })
  }
  ngOnInit(): void {
  }
  onSubmit(data: any) {
    this.DataSharing.changeDataSubject(data);
  }
}
