import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../models/persona';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  id: number = 0;
  nombre: string = '';
  fecha: string = '';
  desc: string = '';
  enlace: string = '';
  imagen: string = '';
  pers: Persona = new Persona(1,'','','','','',[],[],[],[],[]);

  constructor(
    private proyectoService: ProyectoService, 
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const proyecto = new Proyecto(this.id,this.nombre,this.fecha,this.desc,this.enlace,this.imagen,this.pers);
    this.proyectoService.crear(proyecto).subscribe(
      data => {
        Swal.fire({
          text: 'Proyecto agregado!',
          icon: 'success',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#45cd63',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      },
      err => {
        Swal.fire({
          text: 'Error al agregar proyecto: ' + err.message,
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
