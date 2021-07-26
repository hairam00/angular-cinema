import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { CreateEventComponent } from './Components/create-event/create-event.component';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [
  {path:'index', component: HomePageComponent},
  {path:'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'create-event', component: CreateEventComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
