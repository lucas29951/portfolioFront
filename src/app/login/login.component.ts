import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginUsuario } from '../models/login-usuario';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  nombreUsuario: string = '';
  password: string = '';
  loginUsuario: LoginUsuario = new LoginUsuario('','');
  roles: string[]= [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        window.location.reload();
      },
      err => {
        this.isLogged = false;
        Swal.fire({
          title: 'Error',
          text: 'Usuario o contaseña invalidos.',
          icon: 'error',
          iconColor: '#ddd',
          position: 'top',
          background: '#c43725',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          showCloseButton: true
        });
      }
    );
  }
}
