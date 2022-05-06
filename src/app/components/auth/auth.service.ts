import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://desa.ies-webcontent.com.mx'
  constructor(private http: HttpClient) {

  }
  login (user: User): Observable<User> {
    return this.http.post<User>(this.url+'/login',user)
  }


}
