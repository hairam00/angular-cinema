import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestService } from 'src/app/Services/rest.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data: any;
  eventData: any;
  constructor(private restService: RestService, private title: Title) {
    this.title.setTitle('Agri Marketplace')
   }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.restService.getMovieCarosul(5).subscribe(response => {
      this.data = response;
    });
    this.restService.getEvents().subscribe(res => {
      this.eventData = res;
    })
  }
}
