import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }



  getUser(userId: string): Observable<User> {
    return this.http.get<User>(environment.baseUrl + 'users/' + userId);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(environment.baseUrl + 'registration', user);
  }
}
