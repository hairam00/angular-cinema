import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';
import { Users } from 'src/app/Classes/users';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // columns = ["id" , "email", "code", "number", "password"];
  // index = ["id", "email", "code", "number", "password"];
  // users : Users[] = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    // this.restService.getUsers().subscribe
    //  (
    //    (response)=>
    //    {
    //      this.users = response;
    //    },
    //    (error) => console.log(error)
    //  )
  }
  


}
