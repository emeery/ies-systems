import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from './user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://desa.ies-webcontent.com.mx';
  private authSubject = new Subject<boolean>();
  private isLoggedIn = false;
  private token!: string;
  constructor(private http: HttpClient, private router: Router) {}

  getIsLogged() {
    return this.isLoggedIn;
  }

  getToken() {
    return this.token;
  }

  getAuthListen() {
    return this.authSubject.asObservable();
  }

  checkUserAuth() {
    const userToken = this.getStorageAuth();
    console.log(userToken);
    if (!userToken) return;
    const token = userToken.token;
    if (token) {
      console.log('con token');
      this.token = token;
      this.isLoggedIn = true;
      this.authSubject.next(true);
      this.router.navigate(['/welcome']);
    }
  }

  login(user: User) {
    return this.http.post<User>(this.url + '/login', user).subscribe({
      next: (c: any) => {
        this.token = c.data.token;
        if (this.token) {
          this.isLoggedIn = true; //
          this.setStorage(this.token);
          this.authSubject.next(true);
        }
        this.router.navigate(['/welcome']);
      },
      error: (error) => {
        this.authSubject.next(false);
      },
      complete: () => {},
    });
  }

  logout() {
    this.token = ''
    this.isLoggedIn = false;
    this.authSubject.next(false);
    this.clearStorage();
    this.router.navigate(['/page-start']);
  }

  getStorageAuth() {
    const token = localStorage.getItem('token');
    if (!token) return; // detiene la llamada y no devuelve el token
    return { token };
  }

  setStorage(token: string) {
    localStorage.setItem('token', token);
  }

  clearStorage() {
    localStorage.removeItem('token');
  }
}
