import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule, Routes } from '@angular/router';
import { GallryComponent } from './gallry/gallry.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'gallery', component: GallryComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    ContactusComponent,
    GallryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
