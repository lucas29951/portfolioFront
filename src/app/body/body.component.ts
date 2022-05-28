import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  persona: Persona = new Persona(0,'','','','','',[],[],[],[],[]);

  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this. personaService.buscar(1).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        alert("Error! " + err.message);
      }
    );
  }

}
