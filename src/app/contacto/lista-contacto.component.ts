import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../models/contacto';
import { ContactoService } from '../service/contacto.service';
import { LoginService } from '../service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrls: ['./lista-contacto.component.css']
})
export class ListaContactoComponent implements OnInit {

  contactos: Contacto[] = [];
  uLogged: string = '';

  constructor(
    private contactoService: ContactoService,
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
    this.cargarContactos();
  }

  cargarContactos(): void {
    this.contactoService.listar().subscribe(
      data => {
        this.contactos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number): void {
    this.contactoService.borrar(id).subscribe(
      data => {
        Swal.fire({
          text: 'Contacto eliminado!',
          icon: 'success',
          position: 'top-end',
          background: '#4a5e83',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.cargarContactos();
      },
      err => {
        Swal.fire({
          text: 'Error al eliminar contacto: ' + err.message,
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
