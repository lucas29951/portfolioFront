import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { PersonaService } from '../service/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-proyecto',
  templateUrl: './lista-proyecto.component.html',
  styleUrls: ['./lista-proyecto.component.css']
})
export class ListaProyectoComponent implements OnInit {

  @Input() pros: Proyecto[] = [];
  proyectos: Proyecto[] = [];
  perso: string = '';
  existProy = false;

  constructor(
    private router: Router,
    private persoService: PersonaService
    ) { }

  ngOnInit(): void {
    this.perso = this.persoService.getPersonStay();
    this.cargarProyectosDePersona();
    this.existenProyectos();
  }

  volver():void {
    this.router.navigate(['/']);
  }

  existenProyectos(): void {
    Number(this.perso);
    const id = parseInt(this.perso);
    this.persoService.buscar(id).subscribe(
      data => {
        this.proyectos = data.proyectos;
        if(this.proyectos.length != 0){
          this.existProy = true;
        }else{
          this.existProy = false;
        }
      },
      err => {
        console.log(err.message);
      }
    );
  }

  cargarProyectosDePersona(): void {
    Number(this.perso);
    const id = parseInt(this.perso);
    this.persoService.buscar(id).subscribe(
      data => {
        this.proyectos = data.proyectos;
      },
      err => {
        Swal.fire({
          text: 'Error al cargar datos: ' + err.message,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#c43725',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }

}
