import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  movieId: string = '';
  data: any;
  carosul:any;
  constructor(private route: ActivatedRoute, private restService:RestService, private router: Router) { }
  
  ngOnInit(): void {
    this.movieId = this.route.snapshot.params.id;
    window.scrollTo(0, 0);

    this.restService.getMovie(this.movieId).subscribe(resp =>{
      this.data = resp[0];
      console.log(resp[0]);
      this.data = resp[0];
      console.log(this.data);
      if(this.data.summary == '' ){
        this.data.summary = 'No synopsis found for this movie yet.';
      } 
      if(this.data.user_review == '' ){
        this.data.user_review = 'No users have reviewed this movie yet.';
      } 
      if(this.data.critic == ''){
        this.data.critic = "None of the Critics have reviewed this movie yet.";
      }
      if(this.data.videos == ''){
        this.data.videos = "No Video Found yet.";
      }
    });  
    this.restService.getMovieCarosul(7).subscribe(response => {
      this.carosul = response;
    });   
  }
  reload(movieId:string, movieName:string){
    this.router.navigate(['/movies',movieId,movieName])
    .then(() => {
    this.ngOnInit();
    });
  }
}
