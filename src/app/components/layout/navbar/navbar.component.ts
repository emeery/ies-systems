import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLogged = false
  private authSubscription: Subscription
  constructor(
    public auth: AuthService,
    public router: Router
  ) {
    this.authSubscription = this.auth.getAuthListen()
    .subscribe(authL=> {
      this.isLogged = authL
    })
  }

  ngOnInit(): void {
    this.isLogged = this.auth.getIsLogged()


  }


}
