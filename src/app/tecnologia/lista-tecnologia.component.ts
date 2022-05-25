import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../service/tecnologia.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-lista-tecnologia',
  templateUrl: './lista-tecnologia.component.html',
  styleUrls: ['./lista-tecnologia.component.css']
})
export class ListaTecnologiaComponent implements OnInit {

  tecnologias: Tecnologia[] = [];
  uLogged: string = '';

  constructor(
    private tecnologiaService: TecnologiaService, 
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
    this.cargarTecnologias();
  }

  salir():void {
    this.loginService.deleteToken();
    this.uLogged = '';
  }

  loggearse():void {
    this.router.navigate(['/login']);
  }

  cargarTecnologias(): void {
    this.tecnologiaService.listar().subscribe(
      data => {
        this.tecnologias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number): void {
    this.tecnologiaService.borrar(id).subscribe(
      data => {
        alert('Tecnologia eliminada!');
        this.cargarTecnologias();
      },
      err => {
        alert('Error al eliminar tecnologia. ' + err.message);
      }
    );
  }

}
