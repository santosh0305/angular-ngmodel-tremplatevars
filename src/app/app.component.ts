import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  welcome:string = "welcome to angular"
  
  isAdmin = true

  countries = ['India','Usa','Uk']
}
