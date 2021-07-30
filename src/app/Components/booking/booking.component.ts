import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
movieId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieId =  this.route.snapshot.params.id
    console.log("MovieRouteID: "+ this.route.snapshot.params.id);
  }

}
