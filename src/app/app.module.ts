import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

// Zoom library
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { CardflipComponent } from './cardflip/cardflip.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    CardflipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
