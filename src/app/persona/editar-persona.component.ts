import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  persona: Persona = new Persona(0,'','','','','',[],[],[],[],[]);

  constructor(
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.buscar(id).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        alert('Error al mostrar persona ' + id + '. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.editar(id,this.persona).subscribe(
      data => {
        alert('Persona actualizada!');
        this.router.navigate(['/']);
      },
      err => {
        alert('Error al actualizar persona. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }
}
