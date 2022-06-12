import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';
import { LoginService } from '../service/login.service';
import { PersonaService } from '../service/persona.service';
import Swal from 'sweetalert2';

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
        this.cargarProyectosDePersona();
      },
      err => {
        Swal.fire({
          text: 'Error al eliminar proyecto: ' + err.message,
          icon: 'error',
          position: 'top-end',
          background: '#4a5e83',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }
}
