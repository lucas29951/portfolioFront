import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { PersonaService } from './service/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolioFront';

  username: string = '';
  password: string = '';
  loginError: string = '';
  uLogged: string = '';
  perso: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private persoService: PersonaService
  ) {}

ngOnInit(): void {
}

salir():void {
  this.loginService.deleteToken();
  this.uLogged = '';
}
}

