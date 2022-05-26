import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../models/contacto';
import { ContactoService } from '../service/contacto.service';
import { LoginService } from '../service/login.service';

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
        alert('Contacto eliminado!');
        this.cargarContactos();
      },
      err => {
        alert('Error al eliminar contacto. ' + err.message);
      }
    );
  }
}
