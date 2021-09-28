import { Component } from '@angular/core';

@Component({

  templateUrl: './fifth-page.component.html'

})
export class FifthPageComponent {
  hours = new Date().getHours();
  minutes = new Date().getMinutes();
  seconds  = new Date().getSeconds();
  today = new Date();
}
