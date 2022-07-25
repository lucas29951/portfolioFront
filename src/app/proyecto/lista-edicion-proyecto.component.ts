import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';
import { PersonaService } from '../service/persona.service';
import { Persona } from '../models/persona';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-edicion-proyecto',
  templateUrl: './lista-edicion-proyecto.component.html',
  styleUrls: ['./lista-edicion-proyecto.component.css']
})
export class ListaEdicionProyectoComponent implements OnInit {

  @Input() pros: Proyecto[] = [];
  proyectos: Proyecto[] = [];
  proyecto: Proyecto = new Proyecto(0,'','','','','',new Persona(1,'','','','','',[],[],[],[],[]));
  indice: number = 0;
  perso: string = '';
  existProy = false;

  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
    private persoService: PersonaService
  ) { }

  ngOnInit(): void {
    this.perso = this.persoService.getPersonStay();
    this.indice = 0;
    this.cargarProyectosDePersona();
    this.existenProyectos();
  }

  existenProyectos(): void {
    Number(this.perso);
    const id = parseInt(this.perso);
    this.persoService.buscar(id).subscribe(
      data => {
        this.proyectos = data.proyectos;
        if(this.proyectos.length != 0){
          this.existProy = true;
        }else{
          this.existProy = false;
        }
      },
      err => {
        console.log(err.message);
      }
    );
  }

  cargarProyectosDePersona(): void {
    Number(this.perso);
    const id = parseInt(this.perso);
    this.persoService.buscar(id).subscribe(
      data => {
        this.proyectos = data.proyectos;
      },
      err => {
        Swal.fire({
          text: 'Error al cargar datos: ' + err.message,
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

  borrar(id: number, index: number): void {
    this.proyectoService.borrar(id).subscribe(
      data => {
        Swal.fire({
          text: 'Proyecto eliminado!',
          icon: 'success',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#00d80e',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.proyectos.splice(index,1);
        window.location.reload();
      },
      err => {
        Swal.fire({
          text: 'Error al eliminar proyecto:' + err.message,
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

  vistaDetalle(id: number):void {
    this.proyectoService.buscar(id).subscribe(
      data => {
        this.proyecto = data;
      },
      err => {
        console.log('Error!' + err.message);
      }
    )
}

confirmar(id: number,index: number):void {
  this.proyectoService.buscar(id).subscribe(
    data => {
      this.proyecto = data;
      this.indice = index;
    },
    err => {
      console.log('Error!' + err.message);
    }
  )
}

volver():void {
  this.router.navigate(['/']);
}

}
