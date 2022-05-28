import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from '../models/estudio';
import { Persona } from '../models/persona';
import { EstudioService } from '../service/estudio.service';

@Component({
  selector: 'app-nuevo-estudio',
  templateUrl: './nuevo-estudio.component.html',
  styleUrls: ['./nuevo-estudio.component.css']
})
export class NuevoEstudioComponent implements OnInit {

  id: number = 0;
  nombre: string = '';
  logo: string = '';
  titulo: string = '';
  entrada: string = '';
  salida: string = '';
  pers: Persona = new Persona(1,'','','','','',[],[],[],[],[]);

  constructor(private estudioService: EstudioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const estudio = new Estudio(this.id,this.nombre,this.logo,this.titulo,this.entrada,this.salida,this.pers);
    this.estudioService.crear(estudio).subscribe(
      data => {
        alert('Estudio agregado');
        this.router.navigate(['/']);
      },
      err => {
        alert('Error al agregar estudio. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }
}
