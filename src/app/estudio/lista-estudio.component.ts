import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from '../models/estudio';
import { Persona } from '../models/persona';
import { EstudioService } from '../service/estudio.service';
import { LoginService } from '../service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-estudio',
  templateUrl: './lista-estudio.component.html',
  styleUrls: ['./lista-estudio.component.css']
})
export class ListaEstudioComponent implements OnInit {

  @Input() estus: Estudio[] = [];
  estudios: Estudio[] = [];
  estudio: Estudio = new Estudio(0,'','','','','',new Persona(1,'','','','','',[],[],[],[],[]));
  indice: number = 0;
  uLogged: string = '';

  constructor(
    private estudioService: EstudioService, 
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
    this.indice = 0;
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

  borrar(id: number, index: number): void {
    this.estudioService.borrar(id).subscribe(
      data => {
        Swal.fire({
          text: 'Estudio eliminado!',
          icon: 'success',
          position: 'top-end',
          background: '#4a5e83',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.estus.splice(index,1);
      },
      err => {
        Swal.fire({
          text: 'Error al eliminar estudio: ' + err.message,
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

  vistaDetalle(id: number):void {
    this.estudioService.buscar(id).subscribe(
      data => {
        this.estudio = data;
      },
      err => {
        alert('Error!' + err.message);
      }
    )
}

confirmar(id: number,index: number):void {
  this.estudioService.buscar(id).subscribe(
    data => {
      this.estudio = data;
      this.indice = index;
      console.log(this.indice);
    },
    err => {
      alert('Error!' + err.message);
    }
  )
}

salir():void {
  this.loginService.deleteToken();
  this.uLogged = '';
}

loggearse():void {
  this.router.navigate(['/login']);
}

}
