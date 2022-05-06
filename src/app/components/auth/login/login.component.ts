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
  form: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService)
  {
    this.form = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  get f() { return this.form.controls }

  onLogin() {
    console.log(this.f['username'].value)
    console.log(this.f['password'].value)
  }

}
