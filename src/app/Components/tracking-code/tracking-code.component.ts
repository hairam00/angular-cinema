import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-tracking-code',
  templateUrl: './tracking-code.component.html',
  styleUrls: ['./tracking-code.component.css']
})
export class TrackingCodeComponent implements OnInit {
  value = '';
  movieData:Array<any>= [];
  bookData: Array<any> = [];
  constructor(private rest:RestService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getBookings();
  }
  getBookings(){
    this.rest.getBookings().subscribe(response =>{
      this.bookData = response;
      for(let i=0; i < response.length; i++){
        if(response[i]["booking_type"] == 'movies'){
          this.getMovieById(response[i]["ticket_id"]);
        }
        if(response[i]["booking_type"] == 'events'){
          this.getEventByID(response[i]["ticket_id"]);
        }
      }
    })
  }
  getMovieById(id:string){
    this.rest.getMovie(id).subscribe(resp => {
      this.movieData.push(resp)
    })
  }
  getEventByID(id: string){
    this.rest.getEventbyId(id).subscribe(res => {
      this.movieData.push(res)
    })
  }
  delteBooking(id:number){
    this.rest.deleteBooking(id).subscribe(res => {
      this.getBookings();
      this.dialog.closeAll();
      this.trackingCode();
    })
  }
  trackingCode(){
    this.dialog.open(TrackingCodeComponent, {
      height: '80%',
      width: '50%',
    });
  }
}
