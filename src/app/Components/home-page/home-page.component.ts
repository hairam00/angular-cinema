import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';
import { Users } from 'src/app/Classes/users';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  


}
