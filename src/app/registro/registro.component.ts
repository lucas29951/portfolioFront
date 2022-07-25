import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  isRegister = false;
  isRegisterFail = false;
  nuevoUsuario: NuevoUsuario = new NuevoUsuario('','','','',[]);
  nombre: string = '';
  nombreUsuario: string = '';
  email: string = '';
  password: string = '';
  roles: string[] = ['ROLE_USER'];
  isLogged = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre,this.nombreUsuario,this.email,this.password,this.roles);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.isRegister = true;
        this.isRegisterFail = false;
        Swal.fire({
          text: 'Cuenta creada exitosamente!',
          icon: 'success',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#45cd63',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['']);
      },
      err => {
        this.isRegister = false;
        this.isRegisterFail = true;
        Swal.fire({
          title: 'Error',
          text: err.error.mensaje,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top',
          background: '#c43725',
          color: '#ddd',
          width: 500,
          showConfirmButton: false,
          showCloseButton: true
        });
      }
    );
  }
}
