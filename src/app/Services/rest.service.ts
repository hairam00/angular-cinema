import { HttpClient } from '@angular/common/http';
import {Message} from '../Classes/message'
import { Injectable } from '@angular/core';
import { NewsLetter } from '../Classes/news-letter';
import { Users } from '../Classes/users';
import { Whatsapp } from '../Classes/whatsapp';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  userUrl : string = "http://localhost:3000/users";
  newsletterUrl : string = "http://localhost:3000/newsletter";
  whatsappUrl : string = "http://localhost:3000/whatsapp";
  contactUrl : string = "http://localhost:3000/contacts";
  movieUrl: string = "http://localhost:3000/movies";

  // users sign up and login
  getUsers(){
    return this.http.get<Users[]>(this.userUrl);
  }
  createUser(user: Users){
    return this.http.post(this.userUrl, user);
  }
  getlogin(email:string, password:string){
    return this.http.get<any[]>(this.userUrl+"?email="+email+"&password="+password);
  }
  // newsletters
  createNews(news: NewsLetter){
    return this.http.post(this.newsletterUrl, news);
  }
  // whatsapp Subscription
  createWhatsapp(wa: Whatsapp){
    return this.http.post(this.whatsappUrl, wa);
  }
  // contacts us messages
  createMessage(mg: Message){
    return this.http.post(this.contactUrl, mg);
  }
  //movies
  getMovie(id: string){
    return this.http.get<any[]>(this.movieUrl+"?id="+id);
  }
  getMovies(){
    return this.http.get<any[]>(this.movieUrl);
  }
}
