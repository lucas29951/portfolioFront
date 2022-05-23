import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../models/persona';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';

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
  pers: Persona = new Persona(1,'','','','','');

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.id,this.nombre,this.fecha,this.desc,this.enlace,this.imagen,this.pers);
    this.proyectoService.crear(proyecto).subscribe(
      data => {
        alert('Proyecto agregado');
        this.router.navigate(['/']);
      },
      err => {
        alert('Error al agregar proyecto. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }
}
