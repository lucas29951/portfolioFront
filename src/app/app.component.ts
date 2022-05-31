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

/*   login() {
    console.log(this.username);
    console.log(this.password);

    const user = {username: this.username, password: this.password};

    this.loginService.login(user).subscribe(
      data => {
        console.log(data);
        if(data==null) this.loginError = 'Error!';
        else{
          this.loginError = '';
          this.loginService.setToken(data.idUsuario);
          this.uLogged = this.loginService.getUserLogged();
          this.router.navigate(['/']);
        }
      }
    );
  } */

ngOnInit(): void {
  //this.uLogged = this.loginService.getUserLogged();
}

salir():void {
  this.loginService.deleteToken();
  this.uLogged = '';
}
}

