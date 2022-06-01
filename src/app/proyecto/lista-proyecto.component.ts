import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';
import { LoginService } from '../service/login.service';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-lista-proyecto',
  templateUrl: './lista-proyecto.component.html',
  styleUrls: ['./lista-proyecto.component.css']
})
export class ListaProyectoComponent implements OnInit {

  @Input() pros: Proyecto[] = [];
  proyectos: Proyecto[] = [];
  uLogged: string = '';
  perso: string = '';

  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
    private loginService: LoginService,
    private persoService: PersonaService
    ) { }

  ngOnInit(): void {
    /* this.uLogged = this.loginService.getUserLogged();
    console.log("uLogged: " + this.uLogged); */
    this.perso = this.persoService.getPersonStay();
    this.cargarProyectosDePersona();
  }

  volver():void {
    this.loginService.deleteToken();
    this.uLogged = '';
    this.router.navigate(['/']);
  }

  loggearse():void {
    this.router.navigate(['/login']);
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

/*   cargarProyectos(): void {
    this.proyectoService.listar().subscribe(
      data => {
        this.proyectos = data;
      },
      err => {
        console.log(err);
      }
    );
  } */

  borrar(id: number): void {
    this.proyectoService.borrar(id).subscribe(
      data => {
        alert('Proyecto eliminado!');
        this.cargarProyectosDePersona();
      },
      err => {
        alert('Error al eliminar proyecto. ' + err.message);
      }
    );
  }
}
