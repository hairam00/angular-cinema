import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AllEventsComponent } from './Components/all-events/all-events.component';
import { AllMoviesComponent } from './Components/all-movies/all-movies.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { CreateEventComponent } from './Components/create-event/create-event.component';
import { DetailViewComponent } from './Components/detail-view/detail-view.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { OffersComponent } from './Components/offers/offers.component';

const routes: Routes = [
  {path:'index', component: HomePageComponent},
  {path:'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'create-event', component: CreateEventComponent},
  {path: 'all-products', component: AllMoviesComponent},
  {path: 'all-products/upcoming', component: AllMoviesComponent},
  {path: 'all-products/now-showing', component: AllMoviesComponent},
  {path: ':type/:id/:name', component: DetailViewComponent},
  {path: 'events' , component: AllEventsComponent},
  {path: 'offers' , component: OffersComponent},
  {path : '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
