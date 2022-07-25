import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from '../models/estudio';
import { Persona } from '../models/persona';
import { EstudioService } from '../service/estudio.service';
import Swal from 'sweetalert2';

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

  constructor(
    private estudioService: EstudioService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const estudio = new Estudio(this.id,this.nombre,this.logo,this.titulo,this.entrada,this.salida,this.pers);
    this.estudioService.crear(estudio).subscribe(
      data => {
        Swal.fire({
          text: 'Estudio agregado!',
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
          text: 'Error al agregar estudio: ' + err.message,
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
