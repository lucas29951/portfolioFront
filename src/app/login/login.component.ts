import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
        if(data==null){
          Swal.fire({
            title: '¡ERROR!',
            text: 'Usuario y/o contraseña incorrectos.',
            icon: 'error',
            background: '#4a5e83',
            color: '#ddd',
            width: 300,
            showConfirmButton: false,
            timer: 1500
          });
        }
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
  }
}
