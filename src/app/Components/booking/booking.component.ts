import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
id: any;
fromPage: string = '';
fromDialog: string = '';
movieData : any;
selectedTime: string = '';
// status: boolean = false;
slot1: boolean = false;
slot2: boolean = false;
slot3: boolean = false;
slot4: boolean = false;
slot5: boolean = false;
slot6: boolean = false;

bookDate: string = '';
seats: number = 0;
  constructor(public dialogRef: MatDialogRef<BookingComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private rest: RestService, private _snackBar: MatSnackBar) { 
      this.getMovieByID(data.idMovies);
    }

  ngOnInit(): void {
    console.log(this.selectedTime);
    
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  getMovieByID(id:string){
    this.rest.getMovie(id).subscribe(res => {
      this.movieData = res[0];
    });
  }
  uploadBooking(date:string, seats:string){
    let data: any = {
      booking_date: date,
      seats: seats,
      ticket_id: this.movieData.id,
      timings: this.selectedTime
    };
    if(this.selectedTime == ''){
      this.openSnackBar("Please Select Time slot","x");
    }else if(date == ''){
      this.openSnackBar("Please select Date", "x");
    }else if(seats == ''){
      this.openSnackBar("Please select seats", "x");
    }else{
      this.rest.uploadBooking(data).subscribe();
      this.openSnackBar(seats+ " Seats booked for "+ date + " at "+ data.timings,"x");
    }
  }
  selectTime(slot:string){
    this.selectedTime = slot;
    // this.status = !this.status; 
    console.warn(this.selectedTime);
  }
  toggle(arr:any){
    
    console.log(arr);
    if(arr == 'slot1'){
      if(this.slot1 == true){
        document.getElementById(arr)?.classList.remove(arr)  
      }else{
        document.getElementById(arr)?.classList.add(arr);
      }
      this.slot1=!this.slot1;
    }
    if(arr == 'slot2'){
      if(this.slot2 == true){
        document.getElementById(arr)?.classList.remove(arr)  
      }else{
        document.getElementById(arr)?.classList.add(arr);
      }
      this.slot2 =!this.slot2;
    }
    if(arr == 'slot3'){
      if(this.slot3 == true){
        document.getElementById(arr)?.classList.remove(arr)  
      }else{
        document.getElementById(arr)?.classList.add(arr);
      }
      this.slot3 =!this.slot3;
    }
    if(arr == 'slot4'){
      if(this.slot4 == true){
        document.getElementById(arr)?.classList.remove(arr)  
      }else{
        document.getElementById(arr)?.classList.add(arr);
      }
      this.slot4 =!this.slot4;
    }
    if(arr == 'slot5'){
      if(this.slot5 == true){
        document.getElementById(arr)?.classList.remove(arr)  
      }else{
        document.getElementById(arr)?.classList.add(arr);
      }
      this.slot5 =!this.slot5;
    }
    if(arr == 'slot6'){
      if(this.slot6 == true){
        document.getElementById(arr)?.classList.remove(arr)  
      }else{
        document.getElementById(arr)?.classList.add(arr);
      }
      this.slot6 =!this.slot6
    }
  }
}
