import { Component } from '@angular/core';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Aejaaz';
  lblbutton="Event Handle";
  Handleevent()
  {
    this.lblbutton= "Clicked.";
       
    setTimeout(() => {
    this.lblbutton = "Event Handle";
}, 3000);
  }
}
