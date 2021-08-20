import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopRowComponent } from './top-row/top-row.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderRowComponent } from './header-row/header-row.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatExpansionModule} from '@angular/material/expansion';
import { SliderContainerComponent } from './slider-container/slider-container.component';
import { MiddleRowComponent } from './middle-row/middle-row.component';
import { PanelContainerComponent } from './panel-container/panel-container.component';
import { BottomRowComponent } from './bottom-row/bottom-row.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { NewsMailingComponent } from './news-mailing/news-mailing.component';
import { FooterComponent } from './footer/footer.component';
import { NewIncomeComponent } from './new-income/new-income.component';
import { IncomeContainerComponent } from './income-container/income-container.component';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { DeliveryRowComponent } from './delivery-row/delivery-row.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsContainerComponent } from './news-container/news-container.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopRowComponent,
    HeaderRowComponent,
    SliderContainerComponent,
    MiddleRowComponent,
    PanelContainerComponent,
    BottomRowComponent,
    NewCollectionComponent,
    ItemCardComponent,
    NewsMailingComponent,
    FooterComponent,
    NewIncomeComponent,
    IncomeContainerComponent,
    NewTopicComponent,
    DeliveryRowComponent,
    NewsCardComponent,
    NewsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCarouselModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
