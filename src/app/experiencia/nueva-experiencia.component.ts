import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../models/experiencia';
import { Persona } from '../models/persona';
import { ExperienciaService } from '../service/experiencia.service';
import Swal from 'sweetalert2';

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

  constructor(
    private experienciaService: ExperienciaService, 
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = 
    new Experiencia(this.id,this.nombre,this.lugar,this.logo,this.inicio,this.fin,this.desc,this.pers);
    this.experienciaService.crear(experiencia).subscribe(
      data => {
        Swal.fire({
          text: 'Experiencia agregada!',
          icon: 'success',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#45cd63',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      },
      err => {
        Swal.fire({
          text: 'Error al agregar experiencia: ' + err.message,
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
