import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
movies: any;
  constructor(private router: Router, private restService: RestService) { }

  ngOnInit(): void {
    //get all movie from server
    this.restService.getMovies().subscribe(response => {
      this.movies = response;
      console.log(this.movies);
    });
  }
  reload(movieId:string, movieName:string){
    this.router.navigate(['/movies',movieId,movieName])
    .then(() => {
    this.ngOnInit();
    });
  }
}
