import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  private apiUrl = 'https://reqres.in/api/users?page=2';
  constructor(private httpClient: HttpClient) {}
  fetch() {
    return this.httpClient.get(this.apiUrl);
  }
}
console.log('name');
