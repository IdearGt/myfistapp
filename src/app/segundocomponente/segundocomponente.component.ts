import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundocomponente',
  templateUrl: './segundocomponente.component.html',
  styleUrls: ['./segundocomponente.component.css']
})
export class SegundocomponenteComponent implements OnInit {

  title = "Aura";
  subtitulo="mi amor!!";
  constructor() { }

  ngOnInit() {
  }

}
