import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  user!: User
  form: FormGroup
  loading = false
  private authSubscription: Subscription

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

  ngOnInit(): void {}

  get f() { return this.form.controls }

  login() {
    this.loading = true
    this.user = {
      username: this.f['username'].value,password:this.f['password'].value
    }
    this.auth.login(this.user)
    setTimeout(() => {
      this.form.reset()
    }, 1000);
    // this.router.navigate(['/welcome'])
  }

  ngOnDestroy(): void {
      this.authSubscription.unsubscribe()
  }
}
