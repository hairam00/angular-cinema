import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from 'src/app/Services/shared.service';
import { LocationComponent } from '../location/location.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { TrackingCodeComponent } from '../tracking-code/tracking-code.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  city: string = '' ;
  user: string = '' ;
  constructor(public dialog: MatDialog,private sharedService: SharedService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.sharedService.currentLocation.subscribe((location) => (this.city = location));
    this.sharedService.currentUser.subscribe((user) => (this.user = user));
    if(localStorage.getItem('username') != null || localStorage.getItem('username') != ''){
      this.user = localStorage.getItem('username') as string;
    }
    if(localStorage.getItem('username') == null || localStorage.getItem('username') == ''){
      this.user = '';
    }
    // location
    if(localStorage.getItem('City') != null || localStorage.getItem('City') != ''){
      this.city = localStorage.getItem('City') as string;
    }
    if(localStorage.getItem('City') == null || localStorage.getItem('City') == ''){
      this.city = 'City';
    }
  }
  //snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  signIn(){
    this.dialog.open(LoginComponent);
  }
  signupDialog(){
    this.dialog.open(SignupComponent);
  }
  trackingCode(){
    this.dialog.open(TrackingCodeComponent, {
      height: '80%',
      width: '50%',
    });
  }
  location(){
    this.dialog.open(LocationComponent);
  }
  logout(){
    this.user = '';
    localStorage.clear();
    this.city = 'City';
    this.openSnackBar("Logged Out!", "x");
  }
}