import { Component, OnInit } from '@angular/core';
import { UserService, LoginResponse } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name!: string;
  password!: string;

  constructor(
    private userService: UserService,
    private router :Router
  ) {}

  ngOnInit(): void {}

  onlogin() {
    if (!this.name || !this.password) {
      alert('Please enter your username and password');
      return false;
    }

    const user = {
      name: this.name,
      password: this.password
    };

    this.userService.auth(user).subscribe((resp: LoginResponse) => {
      if (!resp.token) {
        alert('Please enter a valid username and password');
        return false;
      }

      this.userService.saveUserDate(resp.token, resp.user);
      this.router.navigate(['main']);
      return true;
    });

    return true;
  }
}
