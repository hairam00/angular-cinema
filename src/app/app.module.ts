import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './Components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { TrackingCodeComponent } from './Components/tracking-code/tracking-code.component';
import { LocationComponent } from './Components/location/location.component';
import { CreateEventComponent } from './Components/create-event/create-event.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DetailViewComponent } from './Components/detail-view/detail-view.component';
import {MatTabsModule} from '@angular/material/tabs';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AllMoviesComponent } from './Components/all-movies/all-movies.component';
import { AllEventsComponent } from './Components/all-events/all-events.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BookingComponent } from './Components/booking/booking.component';
import { OffersComponent } from './Components/offers/offers.component';
import { NotfoundComponent } from './Components/notfound/notfound.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    SignupComponent,
    TrackingCodeComponent,
    LocationComponent,
    CreateEventComponent,
    DetailViewComponent,
    AllMoviesComponent,
    AllEventsComponent,
    BookingComponent,
    OffersComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NgbModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    BrowserModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTabsModule,
    IvyCarouselModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
