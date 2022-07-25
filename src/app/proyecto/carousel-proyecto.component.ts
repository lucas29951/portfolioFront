import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-carousel-proyecto',
  templateUrl: './carousel-proyecto.component.html',
  styleUrls: ['./carousel-proyecto.component.css']
})
export class CarouselProyectoComponent implements OnInit {

  @Input() pros: Proyecto[] = [];
  @Input() person: Persona = new Persona(0,'','','','','',[],[],[],[],[]);
  @Input() permis: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}
