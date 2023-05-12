import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface LoginResponse {
  token: string;
  success: boolean;
  user: {
    name: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  auth(user: any) {
    return this.http.post<LoginResponse>('http://localhost:3000/connectionapp/api/v1/user/login', user).pipe(
      map(response => response)
    );
  }
  
  saveUserDate(token: string, user: any) {
    localStorage.setItem('AUTHTOKEN', token);
    localStorage.setItem('USERINFO', JSON.stringify(user));
  }


}
