import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient)// here we create a variable and pass the HttpClient to that variable
  { }

  // adding user

  public addUser(user:any){
    return this.http.post(`${baseUrl}/user/`, user)
    // here we post the data store in user variable to the link which is present baseUrl
  }
}
