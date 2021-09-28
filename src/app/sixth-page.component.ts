import { Component } from '@angular/core';

@Component({

  templateUrl: './sixth-page.component.html'

})
export class SixthPageComponent {


  lessThan(){
  var seconds = new Date().getSeconds();
    if(seconds >30){
      return seconds+" > 30";
    }
    else{
      return  seconds+" <= 30";
    }
  }

}
