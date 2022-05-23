import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../models/experiencia';
import { Persona } from '../models/persona';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
  selector: 'app-detalle-experiencia',
  templateUrl: './detalle-experiencia.component.html',
  styleUrls: ['./detalle-experiencia.component.css']
})
export class DetalleExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia(0,'','','','','','',new Persona(1,'','','','',''));

  constructor(
    private experienciaService: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.buscar(id).subscribe(
      data => {
        this.experiencia = data;
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
