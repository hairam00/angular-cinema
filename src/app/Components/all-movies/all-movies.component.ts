import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
movies: any;
  constructor(private router: Router, private restService: RestService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    //get all movie from server
    this.getMovies();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  getMovies(){
    this.restService.getMovies().subscribe(response => {
      this.movies = response;
      console.log(this.movies);
    });
  }
  getMovieCategory(release: string){
    if(release == 'All'){
      this.getMovies();
      this.openSnackBar("ALl Movies","x");
    }else{
      this.restService.getMovieRelease(release).subscribe(res => {
        this.movies = res;
        let keys = Object.keys(this.movies).length
        console.log(keys);
        if(keys == 0){
          this.openSnackBar("No Upcoming Movie found ", "x");
        }else{
          this.openSnackBar("Found " + keys + " Upcoming Movies", "x");
        }
      }, error => {
        console.log(error);
      });
    }
  }
  reload(movieId:string, movieName:string){
    this.router.navigate(['/movies',movieId,movieName])
    .then(() => {
    this.ngOnInit();
    });
  }
  clear(){
    this.getMovies();
    this.openSnackBar("Showing All Movies", "x");
  }
}
