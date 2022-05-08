import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from './user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://desa.ies-webcontent.com.mx'
  private authSubject = new Subject<boolean>()
  private isLoggedIn = false
  constructor(private http: HttpClient, private router: Router) {}

  getIsLogged() {
    return this.isLoggedIn
  }

  getAuthListen() {
    return this.authSubject.asObservable()
  }

  login (user: User){
    return this.http.post<User>(this.url+'/login',user)
    .subscribe({
      next: c => {
        this.authSubject.next(true)
        this.router.navigate(['/welcome'])
      },
      error: error => {
        this.authSubject.next(false)
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  }

  logout() {

  }


}
