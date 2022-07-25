import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {

  @Input() perso: Persona = new Persona(0,'','','','','',[],[],[],[],[]);
  @Input() permis: boolean = false;
  persona: Persona = new Persona(0,'','','','','',[],[],[],[],[]);

  constructor(
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = 1;
    this.personaService.buscar(id).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        Swal.fire({
          text: 'Error al cargar datos de persona: ' + err.message,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#c43725',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.volver();
      }
    )
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
