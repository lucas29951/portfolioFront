import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../models/persona';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../service/tecnologia.service';

@Component({
  selector: 'app-nueva-tecnologia',
  templateUrl: './nueva-tecnologia.component.html',
  styleUrls: ['./nueva-tecnologia.component.css']
})
export class NuevaTecnologiaComponent implements OnInit {

  id: number = 0;
  nombre: string = '';
  nivel: number = 0;
  pers: Persona = new Persona(1,'','','','','',[],[],[],[],[]);

  constructor(private tecnologiaService: TecnologiaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const tecnologia = new Tecnologia(this.id,this.nombre,this.nivel,this.pers);
    this.tecnologiaService.crear(tecnologia).subscribe(
      data => {
        alert('Tecnologia agregada');
        this.router.navigate(['/']);
      },
      err => {
        alert('Error al agregar tecnologia. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }
}
