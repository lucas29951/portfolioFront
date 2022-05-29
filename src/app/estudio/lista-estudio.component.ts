import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from '../models/estudio';
import { EstudioService } from '../service/estudio.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-lista-estudio',
  templateUrl: './lista-estudio.component.html',
  styleUrls: ['./lista-estudio.component.css']
})
export class ListaEstudioComponent implements OnInit {

  @Input() estus: Estudio[] = [];
  estudios: Estudio[] = [];
  uLogged: string = '';

  constructor(
    private estudioService: EstudioService, 
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
    //this.cargarEstudios();
  }

  salir():void {
    this.loginService.deleteToken();
    this.uLogged = '';
  }

  loggearse():void {
    this.router.navigate(['/login']);
  }

  cargarEstudios(): void {
    this.estudioService.listar().subscribe(
      data => {
        this.estudios = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number): void {
    this.estudioService.borrar(id).subscribe(
      data => {
        alert('Estudio eliminado!');
        this.cargarEstudios();
      },
      err => {
        alert('Error al eliminar estudio. ' + err.message);
      }
    );
  }
}
