import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario(0,'','','','','');

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.usuarioService.buscar(id).subscribe(
      data => {
        this.usuario = data;
      },
      err => {
        Swal.fire({
          text: 'Error al cargar usuario: ' + err.message,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#c43725',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.usuarioService.editar(id,this.usuario).subscribe(
      data => {
        Swal.fire({
          text: 'Usuario actualizado!',
          icon: 'success',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#4fa3f7',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      },
      err => {
        Swal.fire({
          text: 'Error al actualizar usuario: ' + err.message,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#c43725',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/']);
      }
    );
  }
}
