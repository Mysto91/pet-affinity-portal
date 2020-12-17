import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { DiagonalBoxComponent } from './diagonal-box/diagonal-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuToolbarComponent,
    CarouselComponent,
    FooterComponent,
    DiagonalBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
