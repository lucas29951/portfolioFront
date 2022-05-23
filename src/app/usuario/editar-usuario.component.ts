import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';

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
        alert('Error al mostrar usuario ' + id + '. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.usuarioService.editar(id,this.usuario).subscribe(
      data => {
        alert('Usuario actualizado!');
        this.router.navigate(['/']);
      },
      err => {
        alert('Error al actualizar usuario. ' + err.message);
        this.router.navigate(['/']);
      }
    );
  }
}
