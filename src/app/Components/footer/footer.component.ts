import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
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
  
  whatsappForm = new FormGroup({
    showTimes : new FormControl('',[]),
    upcoming : new FormControl('',[]),
    blogs : new FormControl('',[]),
    whatsappsCity : new FormControl('',[
      Validators.required
    ]),
    whatsappNumber : new FormControl('',[
      Validators.required
    ])
  });
  newsForm = new FormGroup({
    emailFormControl : new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    newsCity : new FormControl('', [
      Validators.required
    ])  
  });

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
  createNews(newsForm: FormGroupDirective){
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
        newsForm.resetForm();
        this.newsForm.get('newsCity')?.clearValidators();
        this.newsForm.get('emailFormControl')?.clearValidators();
        this.newsForm.get('newsCity')?.setValue('');
        this.newsForm.get('emailFormControl')?.setValue('');    
        this.newsForm.controls['newsCity'].setValidators([Validators.required]);
        this.newsForm.controls['emailFormControl'].setValidators([Validators.required]);     
    }
  }
  createWhatsapp(formDirective: FormGroupDirective){
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
        formDirective.resetForm();
        this.whatsappForm.get('whatsappNumber')?.clearValidators();
        this.whatsappForm.get('whatsappsCity')?.clearValidators();
        this.whatsappForm.get('whatsappsCity')?.setValue('');
        this.whatsappForm.get('whatsappNumber')?.setValue(''); 
        this.whatsappForm.get('whatsappsCity')?.setValidators([Validators.required]);
        this.whatsappForm.get('whatsappNumber')?.setValidators([Validators.required]);      
    }
  }
}