import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['luis', 'carlos', 'marina'];
  apellidos = ['perez','ramirez','bernales','jimenes'];
}
