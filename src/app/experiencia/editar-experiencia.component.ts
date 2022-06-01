import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../models/experiencia';
import { Persona } from '../models/persona';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia(0,'','','','','','',new Persona(1,'','','','','',[],[],[],[],[]));

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
        alert('Error al mostrar experiencia ' + id + '. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.editar(id,this.experiencia).subscribe(
      data => {
        alert('Experiencia actualizada!');
        this.router.navigate(['/']);
      },
      err => {
        alert('Error al actualizar experiencia. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }

  volver():void {
    this.router.navigate(['/']);
  }
}
