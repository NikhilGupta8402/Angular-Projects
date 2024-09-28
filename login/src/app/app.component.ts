import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export class Student {
  id: number;
  name: string;
  mobileNo: string;
  email: string;
  city: string;
  state: string;
  zipCode: string;
  address: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.mobileNo = '';
    this.email = '';
    this.city = '';
    this.state = '';
    this.zipCode = '';
    this.address = '';
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('myModal') model: ElementRef | undefined;
  studentObj: Student = new Student();
  studentList: Student[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem('angular17crud');
    if (localData != null) {
      this.studentList = JSON.parse(localData);
    }
  }

  openModel() {
    const model = document.getElementById('myModal');
    if (model != null) {
      model.style.display = 'block';
    }
  }

  closeModel() {
    this.studentObj = new Student();
    if (this.model != null) {
      this.model.nativeElement.style.display = 'none';
    }
  }

  saveStudent() {
    const isLocalPresent = localStorage.getItem('angular17crud');
    if (isLocalPresent != null) {
      const oldArray = JSON.parse(isLocalPresent);
      this.studentObj.id = oldArray.length + 1;
      oldArray.push(this.studentObj);
      this.studentList = oldArray;
      localStorage.setItem('angular17crud', JSON.stringify(oldArray));
    } else {
      const newArr = [];
      this.studentObj.id = 1;
      newArr.push(this.studentObj);
      this.studentList = newArr;
      localStorage.setItem('angular17crud', JSON.stringify(newArr));
    }
    this.closeModel();
  }

  updateStud() {
    const currentRecord = this.studentList.find(
      (m) => m.id === this.studentObj.id
    );
    if (currentRecord != undefined) {
      currentRecord.name = this.studentObj.name;
      currentRecord.address = this.studentObj.address;
      currentRecord.mobileNo = this.studentObj.mobileNo;
      currentRecord.email = this.studentObj.email; // Include email
    }
    localStorage.setItem('angular17crud', JSON.stringify(this.studentList));
    this.closeModel();
  }

  onEdit(item: Student) {
    this.studentObj = item;
    this.openModel();
  }

  onDelete(item: Student) {
    const isDelete = confirm('Are you sure you want to delete?');
    if (isDelete) {
      const currentRecord = this.studentList.findIndex((m) => m.id === item.id);
      if (currentRecord !== -1) {
        this.studentList.splice(currentRecord, 1);
        localStorage.setItem('angular17crud', JSON.stringify(this.studentList));
      }
    }
  }

  trackByFn(index: number, item: Student) {
    return item.id; // Assuming each student has a unique 'id'
  }
}
