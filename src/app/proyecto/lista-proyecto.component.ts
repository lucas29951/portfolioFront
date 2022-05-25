import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-lista-proyecto',
  templateUrl: './lista-proyecto.component.html',
  styleUrls: ['./lista-proyecto.component.css']
})
export class ListaProyectoComponent implements OnInit {

  proyectos: Proyecto[] = [];
  uLogged: string = '';

  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
    this.cargarProyectos();
  }

  salir():void {
    this.loginService.deleteToken();
    this.uLogged = '';
  }

  loggearse():void {
    this.router.navigate(['/login']);
  }

  cargarProyectos(): void {
    this.proyectoService.listar().subscribe(
      data => {
        this.proyectos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number): void {
    this.proyectoService.borrar(id).subscribe(
      data => {
        alert('Proyecto eliminado!');
        this.cargarProyectos();
      },
      err => {
        alert('Error al eliminar proyecto. ' + err.message);
      }
    );
  }
}
