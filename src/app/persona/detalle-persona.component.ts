import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {

  persona: Persona = new Persona(0,'','','','','');

  constructor(
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.buscar(1).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        alert('Error!' + err.message);
        this.volver();
      }
    )
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
