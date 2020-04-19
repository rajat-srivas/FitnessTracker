import { Injectable } from '@angular/core';
import { User } from './user';
import { AuthData } from './auth-data';
import {Subject} from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authChange = new Subject<boolean>();
private user: User;
constructor(private router: Router) { }

registerUser(authData: AuthData) {
  this.user = {
    email: authData.email,
    userId: Math.round(Math.random() * 10000).toString()
  };
  this.onAuthSuccess();
}

login(authData: AuthData) {
  this.user = {
    email: authData.email,
    userId: Math.round(Math.random() * 10000).toString()
  };
  this.onAuthSuccess();
}

logout() {
  this.user = null;
  this.router.navigate(['/login']);

  this.authChange.next(false);
}

getUser() {
  return { ...this.user };
}

isAuth() {
  return this.user != null;
}

onAuthSuccess() {
  this.router.navigate(['/training']);
  this.authChange.next(true);
}

}
