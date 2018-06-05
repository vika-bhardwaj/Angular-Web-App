import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/user';
import {Router} from "@angular/router";
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string;
  password:string;
  constructor(private router: Router,private auth: AuthService) {}
  onLogin(): void {
    this.auth.login(this.email, this.password)
      .then((user) => {
        console.log(user.json());
        this.router.navigate(['dashboard']);
      })
      .catch((err) => {
        console.log("Login err: ",err);
        this.router.navigate(['dashboard']);
      });
  }
}