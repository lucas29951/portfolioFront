import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-proyecto',
  templateUrl: './carousel-proyecto.component.html',
  styleUrls: ['./carousel-proyecto.component.css']
})
export class CarouselProyectoComponent implements OnInit {

  @Input() pros: Proyecto[] = [];
  @Input() person: Persona = new Persona(0,'','','','','',[],[],[],[],[]);
  @Input() permis: boolean = false;
  uLogged: string = '';
  perso: string = '';

  constructor(
    private persoService: PersonaService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
  }

  listaProyectos(): void {
    this.persoService.setToken(this.person.idPersona.toString());
    this.router.navigate(['/show-projects']);
  }

  listaProyectosEdicion(): void {
    this.persoService.setToken(this.person.idPersona.toString());
    this.router.navigate(['/edit-project-list']);
  }
}
