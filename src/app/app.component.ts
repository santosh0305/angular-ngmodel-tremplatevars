import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  pageName = "login"
  maleSelected: boolean = true
  feMaleSelected: boolean = false
}
