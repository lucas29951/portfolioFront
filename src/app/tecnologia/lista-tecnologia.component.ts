import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../service/tecnologia.service';
import { LoginService } from '../service/login.service';
import { Persona } from '../models/persona';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tecnologia',
  templateUrl: './lista-tecnologia.component.html',
  styleUrls: ['./lista-tecnologia.component.css']
})
export class ListaTecnologiaComponent implements OnInit {

  @Input() tecnos: Tecnologia[] = [];
  tecnologias: Tecnologia[] = [];
  tecnologia: Tecnologia = new Tecnologia(0, '', 0, new Persona(1, '', '', '', '', '', [], [], [], [], []));
  indice: number = 0;
  uLogged: string = '';

  constructor(
    private tecnologiaService: TecnologiaService,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
    this.indice = 0;
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

  borrar(id: number, index: number): void {
    this.tecnologiaService.borrar(id).subscribe(
      data => {
        /* Swal.fire({
          text: 'Tecnologia eliminada!',
          icon: 'success',
          position: 'top-end',
          background: '#4a5e83',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        }); */
        this.tecnos.splice(index, 1);
      },
      err => {
        Swal.fire({
          text: 'Error al eliminar tecnologia: ' + err.message,
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

  /*   confirmar(id: number,index: number):void {
      this.tecnologiaService.buscar(id).subscribe(
        data => {
          this.tecnologia = data;
          this.indice = index;
          console.log(this.indice);
        },
        err => {
          alert('Error!' + err.message);
        }
      )
  } */

  confirmar(id: number, index: number): void {
    this.tecnologiaService.buscar(id).subscribe(
      data => {
        this.tecnologia = data;
        this.indice = index;

        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esta accion!",
          icon: 'question',
          background: '#4a5e83',
          color: '#ddd',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              text: 'Tecnologia eliminada!',
              icon: 'success',
              background: '#29d337',
              color: '#ddd',
              width: 300,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500
            })
            this.borrar(this.tecnologia.idTec, this.indice);
          }
        });
      },
      err => {
        alert('Error!' + err.message);
      }
    )
  }

  salir(): void {
    this.loginService.deleteToken();
    this.uLogged = '';
  }

  loggearse(): void {
    this.router.navigate(['/login']);
  }

}
