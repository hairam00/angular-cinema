import { Component, OnInit } from '@angular/core';
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
  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.getBookings();
  }
  getBookings(){
    this.rest.getBookings().subscribe(response =>{
      this.bookData = response;
      for(let i=0; i < response.length;i++){
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
}
