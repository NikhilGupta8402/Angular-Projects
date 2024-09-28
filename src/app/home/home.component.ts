import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showMe: boolean = false;
  isdisabled: boolean = true;
  toggleChange() {
    this.showMe = !this.showMe;
  }
}
