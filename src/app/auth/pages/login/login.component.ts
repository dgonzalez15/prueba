import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../../interfaces/session';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router: Router) { }

  login(){

if (this.form) {
  this.router.navigate(['./pais'])
  console.log(this.register);
}

  }

  form: User = {
    username: 'admin',
    password: 'admin'
    }
    register ={
      user: '',
      password: ''

    }
}
