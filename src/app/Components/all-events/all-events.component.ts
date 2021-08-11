import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
data: any;
searchData: any;
city: string = '';
selectCity: string = '';
selectCategory: string = '';

  constructor(private restService: RestService, private _snackBar: MatSnackBar, private title: Title) {
    this.title.setTitle('Bookitnow - Events')
   }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  ngOnInit(): void {
    window.scroll(0,0);
    this.getCities();
  }
  getCities(){
    this.restService.getEvents().subscribe(resp=>{
      this.data = resp;
    },error=>{
      console.log(error);
    });
  }
  searchCity(city:string){
    if(city != 'All'){
      this.restService.getEvent(city).subscribe( response => {
        this.data = response;
        let keys = Object.keys(this.data).length
        console.log(keys);
        if(keys == 0){
          this.openSnackBar("No Event found in "+city, "x");
        }else{
          this.selectCategory = 'All'
          this.openSnackBar("Found "+ keys + " events in " + city, "x");
        }
      }, error => {
        console.log(error);
      });      
    }else{
      this.getCities();
      this.selectCategory = 'All'
      this.openSnackBar("All Events", "x");
    }
  }
  searchCategory(category:string){
    if(category != 'All'){
      this.restService.getEventCategory(category).subscribe(res => {
        this.data = res;
          let keys = Object.keys(this.data).length
          console.log(keys);
          if(keys == 0){
            this.openSnackBar("No Event found for "+ category, "x");
          }else{
            this.selectCity = 'All'
            this.openSnackBar("Found "+ keys + " events for " + category, "x");
          }
      },error => {
        this.openSnackBar("Internal Server Error","x");
      });
    }else{
      this.getCities();
      this.selectCity = 'All'
      this.openSnackBar("All Events","x")
    }
  }
  clear(){
    this.getCities();
    this.selectCity = 'All'
    this.selectCategory = 'All'
    
  }

}
