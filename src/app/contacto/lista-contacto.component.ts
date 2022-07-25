import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../models/contacto';
import { ContactoService } from '../service/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrls: ['./lista-contacto.component.css']
})
export class ListaContactoComponent implements OnInit {

  @Input() permis: boolean = false;
  contactos: Contacto[] = [];

  constructor(
    private contactoService: ContactoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cargarContactos();
  }

  cargarContactos(): void {
    this.contactoService.listar().subscribe(
      data => {
        this.contactos = data;
      },
      err => {
        Swal.fire({
          text: 'Error al cargar contactos!',
          icon: 'error',
          iconColor: '#ddd',
          position: 'top',
          background: '#c43725',
          color: '#ddd',
          width: 400,
          showConfirmButton: false,
          timer: 1500
        });
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
}
