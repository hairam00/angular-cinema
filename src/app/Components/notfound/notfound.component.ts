import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private title: Title ) {
    this.title.setTitle("Bookitnow - Page not found")
   }

  ngOnInit(): void {
  }

}
