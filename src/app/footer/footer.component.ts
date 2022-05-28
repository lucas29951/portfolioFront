import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from '../models/contacto';
import { ContactoService } from '../service/contacto.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() conts: Contacto[] = [];

  constructor(
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void {
    this.contactoService.listar().subscribe(
      data => {
        this.conts = data;
      },
      err => {
        alert("Error! " + err.message);
      }
    );
  }

}
