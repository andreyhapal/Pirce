import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopRowComponent } from './top-row/top-row.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderRowComponent } from './header-row/header-row.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import {MatExpansionModule} from '@angular/material/expansion';
import { SliderContainerComponent } from './slider-container/slider-container.component';
import { MiddleRowComponent } from './middle-row/middle-row.component';
@NgModule({
  declarations: [
    AppComponent,
    TopRowComponent,
    HeaderRowComponent,
    SliderContainerComponent,
    MiddleRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
