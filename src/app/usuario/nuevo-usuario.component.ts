import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  user: string = '';
  pass: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const usuario = new Usuario(this.id,this.nombre,this.apellido,this.email,this.user,this.pass);
    this.usuarioService.crear(usuario).subscribe(
      data => {
        alert('Usuario creado');
        this.router.navigate(['/']);
      },
      err => {
        alert('Error al crear usuario. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }
}
