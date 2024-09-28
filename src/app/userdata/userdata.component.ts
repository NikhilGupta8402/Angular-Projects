import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss'],
})
export class UserdataComponent {
  data: any;
  constructor(private dataservice: UserdataService) {
    this.getUserData();
  }
  getUserData() {
    this.dataservice.fetch().subscribe((res: any = []) => {
      this.data = res.data;
      console.log('this.data', this.data);
    });
  }
}
