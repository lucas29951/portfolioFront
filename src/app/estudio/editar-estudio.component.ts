import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from '../models/estudio';
import { Persona } from '../models/persona';
import { EstudioService } from '../service/estudio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-estudio',
  templateUrl: './editar-estudio.component.html',
  styleUrls: ['./editar-estudio.component.css']
})
export class EditarEstudioComponent implements OnInit {

  estudio: Estudio = new Estudio(0,'','','','','',new Persona(1,'','','','','',[],[],[],[],[]));

  constructor(
    private estudioService: EstudioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.estudioService.buscar(id).subscribe(
      data => {
        this.estudio = data;
      },
      err => {
        alert('Error al mostrar estudio ' + id + '. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.estudioService.editar(id,this.estudio).subscribe(
      data => {
        Swal.fire({
          title: 'OK',
          text: 'Estudio actualizado!',
          icon: 'success'
        });
        this.router.navigate(['/']);
      },
      err => {
        Swal.fire({
          title: 'ERROR',
          text: 'Error al actualizar estudio: ' + err.message,
          icon: 'error'
        });
        this.router.navigate(['/']);
      }
    );
  }

  volver():void {
    this.router.navigate(['/']);
  }
}
