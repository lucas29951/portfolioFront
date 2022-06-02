import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../models/experiencia';
import { Persona } from '../models/persona';
import { ExperienciaService } from '../service/experiencia.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-lista-experiencia',
  templateUrl: './lista-experiencia.component.html',
  styleUrls: ['./lista-experiencia.component.css']
})
export class ListaExperienciaComponent implements OnInit {

  @Input() exps: Experiencia[] = [];
  experiencias: Experiencia[] = [];
  experiencia: Experiencia = new Experiencia(0,'','','','','','',new Persona(1,'','','','','',[],[],[],[],[]));
  indice: number = 0;
  uLogged: string = '';

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
    this.indice = 0;
    //this.cargarExperiencias();
  }
  
  cargarExperiencias(): void {
    this.experienciaService.listar().subscribe(
      data => {
        this.experiencias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number, index: number): void {
    this.experienciaService.borrar(id).subscribe(
      data => {
        //alert('Experiencia eliminada!');
        //this.cargarExperiencias();
        this.exps.splice(index,1);
      },
      err => {
        alert('Error al eliminar experiencia. ' + err.message);
      }
    );
  }

vistaDetalle(id: number):void {
    this.experienciaService.buscar(id).subscribe(
      data => {
        this.experiencia = data;
      },
      err => {
        alert('Error!' + err.message);
      }
    )
}

confirmar(id: number,index: number):void {
  this.experienciaService.buscar(id).subscribe(
    data => {
      this.experiencia = data;
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

