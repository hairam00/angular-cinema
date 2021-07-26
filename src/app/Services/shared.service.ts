import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  locationSource = new BehaviorSubject("City");
  currentLocation = this.locationSource.asObservable();

  userSource = new BehaviorSubject("");
  currentUser = this.userSource.asObservable();
  constructor() { }

  public changeLocation(location: string): void{
    this.locationSource.next(location);
  }
  public getUserName(username: string): void{
    this.userSource.next(username);
  }
}
