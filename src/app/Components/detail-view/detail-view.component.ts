import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { RestService } from 'src/app/Services/rest.service';
import {MatDialog} from '@angular/material/dialog';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  movieId: string = '';
  data: any;
  carosul:any;
  type: string = '';
  showFiller = false;
  pageTitle: string = '';
  constructor(private route: ActivatedRoute, private restService:RestService, private router: Router,public dialog: MatDialog,private title: Title) {}
  
  ngOnInit(): void {
    this.movieId = this.route.snapshot.params.id;
    this.type = this.route.snapshot.params.type;
    if(this.type == 'movies'){
      this.getMoviesById();
    }
    if(this.type == 'events'){
      this.getEvensById();
    }
    window.scrollTo(0, 0);
    this.restService.getMovieCarosul(7).subscribe(response => {
      this.carosul = response;
    });   
  }

  openDialog() {
    this.dialog.open(BookingComponent,{
      height: '75%',
      width: '50%',
      data: { idMovies: this.movieId, routeParam: this.type }
    });  
  }

  getMoviesById(){
    this.restService.getMovie(this.movieId).subscribe(resp =>{
      this.data = resp[0];
      if(this.data == 'undefined' || this.data == undefined){
        this.router.navigateByUrl('not-found')
      }
      this.pageTitle = this.data.name;
      this.title.setTitle(this.pageTitle as string)
      if(this.data.summary == '' ){
        this.data.summary = 'No synopsis found for this product yet.';
      } 
      if(this.data.user_review == '' ){
        this.data.user_review = 'No users have reviewed this product yet.';
      } 
      if(this.data.critic == ''){
        this.data.critic = "None of the Critics have reviewed this product yet.";
      }
      if(this.data.videos == ''){
        this.data.videos = "No Video Found yet.";
      }
    });  
  }
  getEvensById(){
    this.restService.getEventbyId(this.movieId).subscribe(eventResp => {
      this.data = eventResp[0];
      if(this.data == 'undefined' || this.data == undefined){
        this.router.navigateByUrl('not-found')
      }
      this.pageTitle = "Bookitnow - " + this.data.name;
      this.title.setTitle(this.pageTitle as string)
      if(this.data.summary == '' ){
        this.data.summary = 'No synopsis found for this event yet.';
      } 
      if(this.data.user_review == '' ){
        this.data.user_review = 'No users have reviewed this event yet.';
      } 
      if(this.data.critic == ''){
        this.data.critic = "None of the Critics have reviewed this event yet.";
      }
      if(this.data.videos == ''){
        this.data.videos = "No Video Found yet.";
      }
    });
  }
  reload(movieId:string, movieName:string){
    this.router.navigate(['/movies',movieId,movieName])
    .then(() => {
    this.ngOnInit();
    });
  }
}
