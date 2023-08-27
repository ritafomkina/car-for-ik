import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './core/components/header/header.component';
import StartSectionComponent from './components/start-section/start-section.component';
import AboutUsComponent from './components/about-us/about-us.component';
import GalleryComponent from './components/gallery/gallery.component';
import FooterComponent from './core/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartSectionComponent,
    AboutUsComponent,
    GalleryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
