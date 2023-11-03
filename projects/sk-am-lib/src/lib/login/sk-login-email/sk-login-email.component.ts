import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'lib-sk-login-email',
  templateUrl: './sk-login-email.component.html',
  styleUrls: ['./sk-login-email.component.css'],
})
export class SkLoginEmailComponent {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });
}
