import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://desa.ies-webcontent.com.mx'
  constructor() {

  }
  loginUser(username: string, password: string){

  }
}
