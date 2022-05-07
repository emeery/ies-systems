import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap, catchError, throwError, BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://desa.ies-webcontent.com.mx';
  private authSubject = new Subject<boolean>();
  private isLoggedIn = false;

  constructor(private http: HttpClient) {}

  getIsLogged() {
    return this.isLoggedIn
  }

  getAuthListen() {
    return this.authSubject.asObservable()
  }

  login(user: User) {
    console.log(user)
    return this.http.post(this.url, user).subscribe((res:any) => {
      const user = res.data
      console.log(user)
    },error => {
      console.log('errorcayo  ', error)
      this.authSubject.next(false)
      console.log(this.authSubject)
    })
  }
}
