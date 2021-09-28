import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BookInfoComponent} from "./card/BookInfoComponent";
import {SecondPageComponent} from "./second-page.component";
import {HomePageComponent} from "./home-page.component";
import {ThirdPageComponent} from "./third-page.component";
import {FourthPageComponent} from "./fourth-page.component";
import {FifthPageComponent} from "./fifth-page.component";
import {SixthPageComponent} from "./sixth-page.component";
import {SeventhPageComponent} from "./seventh-page.component";

@NgModule({
  declarations: [
    AppComponent,
    BookInfoComponent,
    SecondPageComponent,
    HomePageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    SeventhPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
