import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  whatsappCity = 'option2';
  newsLetterCity = 'option2';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  newsLetter = {
    id: 0,
    email: '',
    city: ''
  };
  whatsapp = {
    id: 0,
    number: '',
    city: '',
    movies: false,
    events: false,
    blogs: false
  };
  constructor(private restService: RestService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  createNews(){
    const data = {
      id: this.newsLetter.id,
      email: this.newsLetter.email,
      city: this.newsLetter.city
    };
    if(data.email == ""){
      this.openSnackBar("Please add email address", "x")
    }else if(data.city == ""){
      this.openSnackBar("Please add city", "x");
    }else{
      this.restService.createNews(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
        this.openSnackBar("Subscribe Successful", "x");
    }
    
  }
  createWhatsapp(){
    const whatsappData = {
      id: this.whatsapp.id,
      number: this.whatsapp.number,
      city: this.whatsapp.city,
      movies: this.whatsapp.movies,
      events: this.whatsapp.events,
      blogs: this.whatsapp.blogs
    };
    if(whatsappData.number == ""){
      this.openSnackBar("Please add Contact Number", "x")
    }else if(whatsappData.city == ""){
      this.openSnackBar("Please add City", "x")
    }else{
      this.restService.createWhatsapp(whatsappData)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
        this.openSnackBar("Whatsapp Subscription Successfull", "x");
    }
    
  }

}