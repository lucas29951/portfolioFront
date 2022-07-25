import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from '../models/contacto';
import { Persona } from '../models/persona';
import { ContactoService } from '../service/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit {

  contacto: Contacto = new Contacto(0,'','',new Persona(1,'','','','','',[],[],[],[],[]));

  constructor(
    private contactoService: ContactoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.contactoService.buscar(id).subscribe(
      data => {
        this.contacto = data;
      },
      err => {
        Swal.fire({
          text: 'Error al cargar contacto: ' + err.message,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#c43725',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.contactoService.editar(id,this.contacto).subscribe(
      data => {
        Swal.fire({
          text: 'Contacto actualizado!',
          icon: 'success',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#4fa3f7',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      },
      err => {
        Swal.fire({
          text: 'Error al actualizar contacto: ' + err.message,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#c43725',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      }
    );
  }

  volver():void {
    this.router.navigate(['/']);
  }
}
