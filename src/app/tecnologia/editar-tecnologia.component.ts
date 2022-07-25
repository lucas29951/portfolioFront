import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../service/tecnologia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-tecnologia',
  templateUrl: './editar-tecnologia.component.html',
  styleUrls: ['./editar-tecnologia.component.css']
})
export class EditarTecnologiaComponent implements OnInit {

  tecnologia: Tecnologia = new Tecnologia(0,'',0,new Persona(1,'','','','','',[],[],[],[],[]));

  constructor(
    private tecnologiaService: TecnologiaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.tecnologiaService.buscar(id).subscribe(
      data => {
        this.tecnologia = data;
      },
      err => {
        Swal.fire({
          text: 'Error al cargar tecnologia: ' + err.message,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top',
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
    this.tecnologiaService.editar(id,this.tecnologia).subscribe(
      data => {
        Swal.fire({
          text: 'Tecnologia actualizada!',
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
          text: 'Error al actualizar tecnologia: ' + err.message,
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
