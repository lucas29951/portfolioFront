import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from '../models/estudio';
import { EstudioService } from '../service/estudio.service';

@Component({
  selector: 'app-lista-estudio',
  templateUrl: './lista-estudio.component.html',
  styleUrls: ['./lista-estudio.component.css']
})
export class ListaEstudioComponent implements OnInit {

  estudios: Estudio[] = [];

  constructor(private estudioService: EstudioService, private router: Router) { }

  ngOnInit(): void {
    this.cargarEstudios();
  }

  cargarEstudios(): void {
    this.estudioService.listar().subscribe(
      data => {
        this.estudios = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number): void {
    this.estudioService.borrar(id).subscribe(
      data => {
        alert('Estudio eliminado!');
        this.cargarEstudios();
      },
      err => {
        alert('Error al eliminar estudio. ' + err.message);
      }
    );
  }
}
