import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/Service/data-service.service';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styleUrls: ['./compo3.component.css']
})
export class Compo3Component {


  Component3Data: any = '';
  constructor(private DataSharing: DataServiceService) {
    DataSharing.sharingData.subscribe((res: any) => {
      this.Component3Data = res;
    })
  }
  ngOnInit(): void {
  }
  onSubmit(data: any) {
    this.DataSharing.changeDataSubject(data);
  }

}
