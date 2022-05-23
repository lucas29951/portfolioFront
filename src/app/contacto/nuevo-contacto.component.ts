import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../models/contacto';
import { Persona } from '../models/persona';
import { ContactoService } from '../service/contacto.service';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent implements OnInit {

  id: number = 0;
  nombre: string = '';
  info: string = '';
  pers: Persona = new Persona(1,'','','','','');

  constructor(private contactoService: ContactoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const contacto = new Contacto(this.id,this.nombre,this.info,this.pers);
    this.contactoService.crear(contacto).subscribe(
      data => {
        alert('Contacto agregado');
        this.router.navigate(['/']);
      },
      err => {
        alert('Error al agregar contacto. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }
}
