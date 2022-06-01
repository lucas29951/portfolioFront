import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyecto: Proyecto = new Proyecto(0,'','','','','',new Persona(1,'','','','','',[],[],[],[],[]));

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.buscar(id).subscribe(
      data => {
        this.proyecto = data;
      },
      err => {
        alert('Error al mostrar proyecto ' + id + '. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.editar(id,this.proyecto).subscribe(
      data => {
        alert('Proyecto actualizado!');
        this.router.navigate(['/']);
      },
      err => {
        alert('Error al actualizar proyecto. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }

  volver():void {
    this.router.navigate(['/']);
  }
}
