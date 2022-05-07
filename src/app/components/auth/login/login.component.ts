import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user!: User;
  loading = false;
  authSubscription: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {
    this.form = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    })

    this.authSubscription = this.auth.getAuthListen()
    .subscribe(authL => {
      this.loading = authL
    })
  }

  ngOnInit(): void {

  }

  get f() { return this.form.controls }

  onLogin() {
    this.loading = true
    this.user = {
      username: this.f['username'].value,password:this.f['password'].value
    }
    this.auth.login(this.user)
    setTimeout(() => {
      this.form.reset()
    }, 1000);
  }

}
