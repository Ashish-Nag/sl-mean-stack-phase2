import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loadUserDetails(): Observable<User[]>{
    return this.http.get<User[]>("http://localhost:300/api/user");
  }

  postUserDetails(user: User) :Observable<string> {
    return this.http.post("http://localhost:300/api/user", user, {responseType:'text'});
  }
}

