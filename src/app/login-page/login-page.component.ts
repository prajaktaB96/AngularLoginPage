import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.pattern('^(?=[a-z0-9!@#$%^&*()+=?]*[A-Z])[A-Za-z0-9!@#$%^&*()+=?]*')]),
    });
  }

  submitLoginForm(){
    let loginObj = {
      emailId: this.loginForm.controls.emailId.value,
      password: this.loginForm.controls.password.value
    }
    console.log("loginObj==========",loginObj);
    localStorage.setItem("userName", loginObj.emailId)
    this.router.navigate(['dashboard']);
  }

}
