import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.css']
})
export class NuevaPersonaComponent implements OnInit {

  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  resumen: string = '';
  prof: string = '';
  foto: string = '';

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const persona = new Persona(this.id,this.nombre,this.apellido,this.prof,this.resumen,this.foto);
    this.personaService.crear(persona).subscribe(
      data => {
        alert('Persona creada');
        this.router.navigate(['/']);
      },
      err => {
        alert('Error al crear persona. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }
}
