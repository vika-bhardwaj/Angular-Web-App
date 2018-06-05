import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { AuthService } from '../services/auth/auth.service';
import { patternValidator } from '../shared/pattern-validator';


@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {
  email:string;
  password:string;
  loginForm: FormGroup;
  constructor(private router: Router,private auth: AuthService) {

  }
  ngOnInit() {
    
    /* get and set values in local storage */
    /*if(localStorage.getItem('currentUser') != undefined){
        this.router.navigate(['dashboard']);
    }*/
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', Validators.required),
    });
  }

  public login() {
    /* get and set values in local storage */
    /*if(localStorage.getItem('currentUser') != undefined ){
       var user = JSON.parse(localStorage.getItem('currentUser'));
    }else{
      localStorage.setItem('currentUser', JSON.stringify({ email: this.email, password: this.password }));
    }*/

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
