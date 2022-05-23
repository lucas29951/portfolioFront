import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from '../models/contacto';
import { Persona } from '../models/persona';
import { ContactoService } from '../service/contacto.service';

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit {

  contacto: Contacto = new Contacto(0,'','',new Persona(1,'','','','',''));

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
        alert('Error al mostrar contacto ' + id + '. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.contactoService.editar(id,this.contacto).subscribe(
      data => {
        alert('Contacto actualizado!');
        this.router.navigate(['/']);
      },
      err => {
        alert('Error al actualizar contacto. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }
}
