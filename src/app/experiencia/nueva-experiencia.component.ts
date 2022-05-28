import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../models/experiencia';
import { Persona } from '../models/persona';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  id: number = 0;
  nombre: string = '';
  lugar: string = '';
  logo: string = '';
  inicio: string = '';
  fin: string = '';
  desc: string = '';
  pers: Persona = new Persona(1,'','','','','',[],[],[],[],[]);

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = 
    new Experiencia(this.id,this.nombre,this.lugar,this.logo,this.inicio,this.fin,this.desc,this.pers);
    this.experienciaService.crear(experiencia).subscribe(
      data => {
        alert('Experiencia agregada');
        this.router.navigate(['/']);
      },
      err => {
        alert('Error al agregar experiencia. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }
}
