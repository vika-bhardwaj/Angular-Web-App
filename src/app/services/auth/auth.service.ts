import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
@Injectable()
export class AuthService {
  
  apiUrl = "http://localhost:5000/auth"
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { 
    
  }
  login(email, password): Promise<any> {
    var user = {
      email:email,
      password:password
    }
    let url: string = this.apiUrl+'/login';
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
}
