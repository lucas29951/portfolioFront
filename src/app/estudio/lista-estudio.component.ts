import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from '../models/estudio';
import { Persona } from '../models/persona';
import { EstudioService } from '../service/estudio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-estudio',
  templateUrl: './lista-estudio.component.html',
  styleUrls: ['./lista-estudio.component.css']
})
export class ListaEstudioComponent implements OnInit {

  @Input() estus: Estudio[] = [];
  @Input() permis: boolean = false;
  estudios: Estudio[] = [];
  estudio: Estudio = new Estudio(0,'','','','','',new Persona(1,'','','','','',[],[],[],[],[]));
  indice: number = 0;
  existEstus = false;

  constructor(
    private estudioService: EstudioService, 
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.indice = 0;
    this.existenEstudios();
  }

  existenEstudios(): void {
    this.estudioService.listar().subscribe(
      data => {
        this.estudios = data;
        if(this.estudios.length != 0){
          this.existEstus = true;
        }else{
          this.existEstus = false;
        }
      },
      err => {
        console.log(err.message);
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
    this.estudioService.buscar(id).subscribe(
      data => {
        this.estudio = data;
      },
      err => {
        console.log('Error!' + err.message);
      }
    )
}

confirmar(id: number,index: number):void {
  this.estudioService.buscar(id).subscribe(
    data => {
      this.estudio = data;
      this.indice = index;
    },
    err => {
      console.log('Error!' + err.message);
    }
  )
}

}
