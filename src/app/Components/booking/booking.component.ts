import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
id: any;
fromPage: string = '';
fromDialog: string = '';
movieData : any;

bookDate: string = '';
seats: number = 0;
  constructor(public dialogRef: MatDialogRef<BookingComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private rest: RestService) { 
      this.getMovieByID(data.idMovies);
    }

  ngOnInit(): void {
  }
  getMovieByID(id:string){
    this.rest.getMovie(id).subscribe(res => {
      this.movieData = res[0];
      console.log(this.movieData);
    })
  }
  uploadBooking(date:string, seats:string){
    let data: any = {
      booking_date: date,
      seats: seats,
      ticket_id: this.movieData.id
    };
    console.log("Date: "+ date + " Seats: "+ seats)
    console.log(data);
    this.rest.uploadBooking(data).subscribe(response => {
      console.log()
    });
  }

}
