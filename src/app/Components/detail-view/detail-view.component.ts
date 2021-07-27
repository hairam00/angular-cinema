import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  name: string = '';
  id: string = '';
  data: any;
  constructor(private route: ActivatedRoute, private restService:RestService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params.name;
    this.id = this.route.snapshot.params.id;
    console.log(this.name);
    window.scrollTo(0, 0);

    this.restService.getMovie(this.id).subscribe(resp =>{
      this.data = resp[0];
      console.log(resp[0]);
      this.data = resp[0];
      console.log(this.data);
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
   
        
  }
}
