import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking-code',
  templateUrl: './tracking-code.component.html',
  styleUrls: ['./tracking-code.component.css']
})
export class TrackingCodeComponent implements OnInit {
  value = '';
  constructor() { }

  ngOnInit(): void {
  }

}
