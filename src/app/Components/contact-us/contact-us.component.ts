import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  selected = 'code';
  firstNameControl = new FormControl('',[
    Validators.required
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  lastNameControl = new FormControl('',[
    Validators.required
  ]);
  contactCodeControl = new FormControl('',[
    Validators.required
  ]);
  contactControl = new FormControl('',[
    Validators.required
  ]);
  messageControl = new FormControl('',[
    Validators.required
  ]);
  messageContact = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    code: '',
    number: '',
    subject: '',
    message: ''
  }
  constructor(private restService: RestService, private _snackBar: MatSnackBar, private title: Title) {
    this.title.setTitle('Contact us')
   }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  createMessage(){
    const messageData = {
      id: this.messageContact.id,
      firstname: this.messageContact.firstname,
      lastname: this.messageContact.lastname,
      email: this.messageContact.email,
      code: this.messageContact.code,
      number: this.messageContact.number,
      subject: this.messageContact.subject,
      message: this.messageContact.message
    };
    if(messageData.firstname == ''){
      this.openSnackBar("Please add first name", "x");
    }else if(messageData.lastname == ''){
      this.openSnackBar("Please add last name", "x")
    }else if(messageData.email == ''){
      this.openSnackBar("Please add email", "x")
    }else if(messageData.code == ''){
      this.openSnackBar("Please add contact code", "x")
    }else if(messageData.number == ''){
      this.openSnackBar("Please add contact number", "x")
    }else if(messageData.subject == ''){
      this.openSnackBar("Please add subject", "x")
    }else if(messageData.message == ''){
      this.openSnackBar("Please add message", "x")
    }else{
      this.restService.createMessage(messageData)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
            this.openSnackBar("Can't send Message due to internal error", "x");
          });
      this.openSnackBar("Message Sent Successful", "x");
    }
  }
}