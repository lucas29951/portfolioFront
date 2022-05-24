import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../service/tecnologia.service';

@Component({
  selector: 'app-lista-tecnologia',
  templateUrl: './lista-tecnologia.component.html',
  styleUrls: ['./lista-tecnologia.component.css']
})
export class ListaTecnologiaComponent implements OnInit {

  tecnologias: Tecnologia[] = [];

  constructor(private tecnologiaService: TecnologiaService, private router: Router) { }

  ngOnInit(): void {
    this.cargarTecnologias();
  }

  cargarTecnologias(): void {
    this.tecnologiaService.listar().subscribe(
      data => {
        this.tecnologias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number): void {
    this.tecnologiaService.borrar(id).subscribe(
      data => {
        alert('Tecnologia eliminada!');
        this.cargarTecnologias();
      },
      err => {
        alert('Error al eliminar tecnologia. ' + err.message);
      }
    );
  }

}
