import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
previousOffer: any;
currentOffer:any;
  constructor(private rest: RestService) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.getOffers();
  }
  getOffers(){
    this.rest.getOffers('previous').subscribe(resp => {
      this.previousOffer = resp
    });
    this.rest.getOffers('current').subscribe(current => {
      this.currentOffer = current;
    });
  }
}
