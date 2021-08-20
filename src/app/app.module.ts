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
import { MiddleRowComponent } from './main/middle-row/middle-row.component';
import { PanelContainerComponent } from './main/panel-container/panel-container.component';
import { BottomRowComponent } from './main/bottom-row/bottom-row.component';
import { NewCollectionComponent } from './main/new-collection/new-collection.component';
import { ItemCardComponent } from './main/income-container/item-card/item-card.component';
import { NewsMailingComponent } from './main/news-mailing/news-mailing.component';
import { FooterComponent } from './footer/footer.component';
import { NewIncomeComponent } from './main/new-income/new-income.component';
import { IncomeContainerComponent } from './main/income-container/income-container.component';
import { NewTopicComponent } from './main/new-topic/new-topic.component';
import { DeliveryRowComponent } from './main/delivery-row/delivery-row.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsContainerComponent } from './main/news-container/news-container.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { MainPageComponent } from './main/main-page/main-page.component';
import { ItemsShopComponent } from './shop/items-shop/items-shop.component';

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
    NewsContainerComponent,
    MainPageComponent,
    ItemsShopComponent
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
