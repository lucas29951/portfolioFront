import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';
import { Persona } from '../models/persona';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carousel-proyecto',
  templateUrl: './carousel-proyecto.component.html',
  styleUrls: ['./carousel-proyecto.component.css']
})
export class CarouselProyectoComponent implements OnInit {

  @Input() pros: Proyecto[] = [];
  @Input() person: Persona = new Persona(0,'','','','','',[],[],[],[],[]);
  @Input() permis: boolean = false;
  proyectos: Proyecto[] = [];

  constructor(
    private proyectoService: ProyectoService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  borrar(id: number): void {
    this.proyectoService.borrar(id).subscribe(
      data => {
        Swal.fire({
          text: 'Proyecto eliminado!',
          icon: 'success',
          position: 'top-end',
          background: '#4a5e83',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
      },
      err => {
        Swal.fire({
          text: 'Error al eliminar proyecto: ' + err.message,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#c43725',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }
}
