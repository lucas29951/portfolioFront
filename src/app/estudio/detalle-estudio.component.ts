import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from '../models/estudio';
import { Persona } from '../models/persona';
import { EstudioService } from '../service/estudio.service';

@Component({
  selector: 'app-detalle-estudio',
  templateUrl: './detalle-estudio.component.html',
  styleUrls: ['./detalle-estudio.component.css']
})
export class DetalleEstudioComponent implements OnInit {

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
        alert('Error!' + err.message);
        this.volver();
      }
    )
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
