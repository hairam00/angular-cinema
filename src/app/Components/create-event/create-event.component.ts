import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
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
