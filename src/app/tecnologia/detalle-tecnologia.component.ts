import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../service/tecnologia.service';

@Component({
  selector: 'app-detalle-tecnologia',
  templateUrl: './detalle-tecnologia.component.html',
  styleUrls: ['./detalle-tecnologia.component.css']
})
export class DetalleTecnologiaComponent implements OnInit {

  tecnologia: Tecnologia = new Tecnologia(0,'',new Persona(1,'','','','',''));

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
        alert('Error!' + err.message);
        this.volver();
      }
    )
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
