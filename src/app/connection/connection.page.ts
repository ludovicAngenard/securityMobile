import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})

// export class User {
//   email: string;
//   password: string;
// }

export class ConnectionPage implements OnInit {
  endpoint = 'http://localhost:8080/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private router: Router) { }
  password : string;
  email : string;
  already_exist : boolean;
  is_connecting : boolean;
  mail_not_exist : boolean;
  password_different :boolean;
  users : any[];
  createUser(user){
    return this.httpClient.post(this.endpoint, JSON.stringify(user), this.httpOptions)
  }
  getUser(email) {
    let users = JSON.parse(localStorage.getItem('users'));
    let result = {}
    for (const key in users) {
      if (users[key].email == email){
        result = users[key]
      }
    }
    return result;
  }
  connect(){
    const tryPass = document.getElementById('password') as HTMLInputElement | null;
    if (tryPass != null) {
      this.password = tryPass.value;
    }
    const tryEmail = document.getElementById('password') as HTMLInputElement | null;
    if (tryEmail != null) {
      this.email = tryEmail.value;
    }
    let user = {password: this.password, email: this.email}
    if (JSON.stringify(this.getUser(this.email)) == JSON.stringify(user)){
      localStorage.setItem('current_user', JSON.stringify(user));
      this.mail_not_exist = false
      this.router.navigate(['/welcome'])
    } else {
      this.mail_not_exist = true
    }
  }

  register(){
    const tryPass = document.getElementById('password') as HTMLInputElement | null;
    if (tryPass != null) {
      this.password = tryPass.value;
    }
    const tryEmail = document.getElementById('password') as HTMLInputElement | null;
    if (tryEmail != null) {
      this.email = tryEmail.value;
    }
    const tryConfirmPassword = document.getElementById('password') as HTMLInputElement | null;
    if ((tryConfirmPassword != null) && ( tryConfirmPassword.value == this.password)) {
      let current_user = {password: this.password, email: this.email}
      if (Object.entries(this.getUser(this.email)).length === 0){
        this.users.push(current_user);
        localStorage.setItem('users', JSON.stringify(this.users));
        this.router.navigate(['/welcome'])
      }

      this.password_different = false;
    } else {
      this.password_different = true;
    }
  }
  toggleForm(){
    this.is_connecting = !this.is_connecting;
  }
  ngOnInit() {
    this.users = [];
    this.already_exist = false;
    this.is_connecting = true;
    localStorage.setItem('users', JSON.stringify(this.users));
  }

}
