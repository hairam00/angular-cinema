import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  selected = 'code';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  fieldArray: Array<any> = [];
  newAttribute: any = {};

  eventArray: Array<any> = [];
  eventAttribute: any = {};

  constructor(private title: Title) {
    this.title.setTitle('Create Product Request')
   }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  addRow(){
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }
  deleteRow(index: any) {
    this.fieldArray.splice(index, 1);
  }
  addEvent(){
    this.eventArray.push(this.eventAttribute)
    this.eventAttribute = {};
  }
  deleteEvent(index: any) {
    this.eventArray.splice(index, 1);
  }

}
