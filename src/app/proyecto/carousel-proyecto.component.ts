import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';
import { LoginService } from '../service/login.service';
import { PersonaService } from '../service/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-carousel-proyecto',
  templateUrl: './carousel-proyecto.component.html',
  styleUrls: ['./carousel-proyecto.component.css']
})
export class CarouselProyectoComponent implements OnInit {

  @Input() pros: Proyecto[] = [];
  @Input() person: Persona = new Persona(0,'','','','','',[],[],[],[],[]);
  proyectos: Proyecto[] = [];
  uLogged: string = '';
  perso: string = '';

  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
    private loginService: LoginService,
    private persoService: PersonaService
  ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
  }

  salir():void {
    this.loginService.deleteToken();
    this.uLogged = '';
  }

  listaProyectos():void {
    this.persoService.setToken(this.person.idPersona.toString());
    this.router.navigate(['/show-projects']);
  }

  listaProyectosEdicion():void {
    this.persoService.setToken(this.person.idPersona.toString());
    this.router.navigate(['/edit-project-list']);
  }

  cargarProyectos(): void {
    this.proyectoService.listar().subscribe(
      data => {
        this.proyectos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number): void {
    this.proyectoService.borrar(id).subscribe(
      data => {
        alert('Proyecto eliminado!');
        this.cargarProyectos();
      },
      err => {
        alert('Error al eliminar proyecto. ' + err.message);
      }
    );
  }
}
