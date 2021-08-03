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
        this.getMovieById(response[i]["ticket_id"]);
      }
      console.warn(this.movieData);
    })
  }
  getMovieById(id:string){
    this.rest.getMovie(id).subscribe(resp => {
      this.movieData.push(resp)
    })
  }
  delteBooking(id:number){
    this.rest.deleteBooking(id).subscribe(res => {
      console.log("Order cancel!");
      this.getBookings();
      this.dialog.closeAll();
      this.trackingCode();
    })
  }
  trackingCode(){
    const dialogRef = this.dialog.open(TrackingCodeComponent, {
      height: '80%',
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
