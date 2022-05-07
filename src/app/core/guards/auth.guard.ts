import {
  CanActivate,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../components/auth/auth.service';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router: Router
  ) {}

  // canActivate(): boolean | Observable<boolean> | Promise<boolean> {
  //   const authorized =
  // }
}
