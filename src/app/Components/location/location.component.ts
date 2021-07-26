import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private sharedService: SharedService, public dialog: MatDialog) { }
  city: string = "";
  ngOnInit(): void {
  }
  getCityName(event: any): void{
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value);
    this.sharedService.changeLocation(value);
    localStorage.setItem("City", value);
    this.dialog.closeAll();
  }
  
}
