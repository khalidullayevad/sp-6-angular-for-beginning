import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  {AppComponent} from "./app.component";
import {SecondPageComponent} from "./second-page.component";
import {HomePageComponent} from "./home-page.component";
import {ThirdPageComponent} from "./third-page.component";
import {FourthPageComponent} from "./fourth-page.component";
import {FifthPageComponent} from "./fifth-page.component";
import {SixthPageComponent} from "./sixth-page.component";
import {SeventhPageComponent} from "./seventh-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'secondpage', component: SecondPageComponent },
  { path: 'thirdpage', component: ThirdPageComponent },
  { path: 'fourthpage', component: FourthPageComponent },
  { path: 'fifthpage', component: FifthPageComponent },
  { path: 'sixthpage', component: SixthPageComponent },
  { path: 'seventhpage', component: SeventhPageComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
