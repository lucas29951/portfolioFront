import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})
export class ListaPersonaComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(): void {
    this.personaService.listar().subscribe(
      data => {
        this.personas = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number): void {
    this.personaService.borrar(id).subscribe(
      data => {
        alert('Persona eliminada!');
        this.cargarPersonas();
      },
      err => {
        alert('Error al eliminar persona. ' + err.message);
      }
    );
  }
}
