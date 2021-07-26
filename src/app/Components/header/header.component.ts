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
    console.warn(localStorage.getItem('username'));
    if(localStorage.getItem('username') != null || localStorage.getItem('username') != ''){
      this.user = localStorage.getItem('username') as string;
      console.log("User from local storage" + localStorage.getItem('username'));
    }
    if(localStorage.getItem('username') == null || localStorage.getItem('username') == ''){
      this.user = '';
      console.log("no user in local storage" + localStorage.getItem('username'));
    }
    // location
    if(localStorage.getItem('City') != null || localStorage.getItem('City') != ''){
      this.city = localStorage.getItem('City') as string;
      console.log("User from local storage" + localStorage.getItem('City'));
    }
    if(localStorage.getItem('City') == null || localStorage.getItem('City') == ''){
      this.city = 'City';
      console.log("no user in local storage" + localStorage.getItem('City'));
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  signIn(){
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  signupDialog(){
    const dialogRef = this.dialog.open(SignupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  trackingCode(){
    const dialogRef = this.dialog.open(TrackingCodeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  location(){
    const dialogRef = this.dialog.open(LocationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  logout(){
    this.user = '';
    localStorage.clear();
    this.city = 'City';
    this.openSnackBar("Logged Out!", "x");
  }
}