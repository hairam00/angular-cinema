import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
hideFilter: boolean = false;
@ViewChild('category', { static: true }) input: ElementRef | undefined;
  constructor(private router: Router, private restService: RestService, private _snackBar: MatSnackBar) { }
  ngAfterViewInit() {
  }
  ngOnInit(): void {
    if(this.router.url == '/all-movies/upcoming'){
      this.getMovieCategory('Upcoming');
      this.hideFilter = true;
    }else if(this.router.url == '/all-movies/now-showing'){
      this.getMovieCategory('Now');
      this.hideFilter = true;
    }else{
      this.getMovies();
      this.hideFilter = false;
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  getMovies(){
    this.restService.getMovies().subscribe(response => {
      this.movies = response;
    });
  }

  getMovieCategory(release: string){
    if(release == 'All'){
      this.getMovies();
      this.openSnackBar("ALl Movies","x");
    }else{
      this.restService.getMovieRelease(release).subscribe(res => {
        this.movies = res;
        let keys = Object.keys(this.movies).length;
        if(keys == 0){
          this.openSnackBar("No Upcoming Movie found ", "x");
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
    let a = this.input?.nativeElement.value;
    a = "All";
  }
}
