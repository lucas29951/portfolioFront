import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';
import Swal from 'sweetalert2';

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
        Swal.fire({
          text: 'Error al cargar proyecto: ' + err.message,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#c43725',
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
    this.proyectoService.editar(id,this.proyecto).subscribe(
      data => {
        Swal.fire({
          text: 'Proyecto actualizado!',
          icon: 'success',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#4fa3f7',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      },
      err => {
        Swal.fire({
          text: 'Error al actualizar proyecto: ' + err.message,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#c43725',
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
