import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginUser } from '../model/loginUser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  dataForm!: FormGroup;
  messageEmail!: string;
  messagePassword!: string;
  errorEmail!: boolean;
  errorPassword!: boolean;

  user: loginUser = {
    email: '',
    password: '',
  };

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  testRegex() {
    const emailInput = this.user.email;
    const passwordInput = this.user.password;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{5,}$/;

    if (emailPattern.test(emailInput)) {
      this.messageEmail = 'Email valida';
      this.errorEmail = false;
    } else {
      this.messageEmail = 'Email non valida';
      this.errorEmail = true;
    }

    if (passwordPattern.test(passwordInput)) {
      this.messagePassword = 'Password valida';
      this.errorPassword = false;
    } else {
      this.messagePassword = 'Password non valida es: "Abc123"';
      this.errorPassword = true;
    }
    return this.messageEmail + this.messagePassword;
  }
}
