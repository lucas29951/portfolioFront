import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';
import Swal from 'sweetalert2';

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
        Swal.fire({
          text: 'Error al cargar persona: ' + err.message,
          icon: 'error',
          position: 'top-end',
          background: '#4a5e83',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.editar(id,this.persona).subscribe(
      data => {
        Swal.fire({
          text: 'Persona actualizada!',
          icon: 'success',
          position: 'top-end',
          background: '#4a5e83',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      },
      err => {
        Swal.fire({
          text: 'Error al actualizar persona: ' + err.message,
          icon: 'error',
          position: 'top-end',
          background: '#4a5e83',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      }
    );
  }

  volver():void {
    this.router.navigate(['/']);
  }
}
