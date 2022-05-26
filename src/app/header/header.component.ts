import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string = '';
  password: string = '';
  loginError: string = '';
  uLogged: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
  ) { }

  login() {
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
  }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
  }

  salir():void {
    this.loginService.deleteToken();
    this.uLogged = '';
    this.router.navigate(['/']);
  }
}
