import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {
    this.form = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    })
  }

  ngOnInit(): void {}

  get f() { return this.form.controls }

  onLogin() {
    this.user = {username: this.f['username'].value,password:this.f['password'].value}
    this.auth.login(this.user).subscribe(res => {
      console.log(res)
    })
  }

}
