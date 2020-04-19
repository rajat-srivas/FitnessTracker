import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { AuthService } from './Auth.service';
import {Subscription} from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'fitness-tracker';
  openSideNav = false;
  authSubscription: Subscription;
  isAuth = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
   this.authSubscription =  this.authService.authChange.subscribe(authStatus => {
this.isAuth = authStatus;
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.sidenav.close();
  }

}
