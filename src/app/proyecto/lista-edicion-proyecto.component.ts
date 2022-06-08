import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';
import { LoginService } from '../service/login.service';
import { PersonaService } from '../service/persona.service';
import { Persona } from '../models/persona';

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
  uLogged: string = '';
  perso: string = '';

  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
    private loginService: LoginService,
    private persoService: PersonaService
  ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
    this.perso = this.persoService.getPersonStay();
    this.indice = 0;
    this.cargarProyectosDePersona();
  }

  cargarProyectosDePersona(): void {
    Number(this.perso);
    const id = parseInt(this.perso);
    this.persoService.buscar(id).subscribe(
      data => {
        this.proyectos = data.proyectos;
      },
      err => {
        alert("ERROR! " + err.message);
      }
    );
  }

  borrar(id: number, index: number): void {
    this.proyectoService.borrar(id).subscribe(
      data => {
        this.proyectos.splice(index,1);
      },
      err => {
        alert('Error al eliminar proyecto. ' + err.message);
      }
    );
  }

  vistaDetalle(id: number):void {
    this.proyectoService.buscar(id).subscribe(
      data => {
        this.proyecto = data;
      },
      err => {
        alert('Error!' + err.message);
      }
    )
}

confirmar(id: number,index: number):void {
  this.proyectoService.buscar(id).subscribe(
    data => {
      this.proyecto = data;
      this.indice = index;
      console.log(this.indice);
    },
    err => {
      alert('Error!' + err.message);
    }
  )
}

volver():void {
  this.router.navigate(['/']);
}
}
