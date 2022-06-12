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
    console.log(id);
    this.tecnologiaService.buscar(id).subscribe(
      data => {
        this.tecnologia = data;
        console.log(this.tecnologia);
      },
      err => {
        Swal.fire({
          text: 'Error al cargar tecnologia: ' + err.message,
          icon: 'error',
          position: 'top-end',
          background: '#4a5e83',
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
    console.log(id);
    this.tecnologiaService.editar(id,this.tecnologia).subscribe(
      data => {
        Swal.fire({
          text: 'Tecnologia actualizada!',
          icon: 'success',
          position: 'top-end',
          background: '#4a5e83',
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
          position: 'top-end',
          background: '#4a5e83',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      }
    );
    console.log(this.tecnologia);
  }

  volver():void {
    this.router.navigate(['/']);
  }
}
