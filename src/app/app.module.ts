import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContactoComponent } from './contacto/lista-contacto.component';
import { NuevoContactoComponent } from './contacto/nuevo-contacto.component';
import { EditarContactoComponent } from './contacto/editar-contacto.component';
import { BorrarContactoComponent } from './contacto/borrar-contacto.component';
import { ListaEstudioComponent } from './estudio/lista-estudio.component';
import { NuevoEstudioComponent } from './estudio/nuevo-estudio.component';
import { EditarEstudioComponent } from './estudio/editar-estudio.component';
import { BorrarEstudioComponent } from './estudio/borrar-estudio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaContactoComponent,
    NuevoContactoComponent,
    EditarContactoComponent,
    BorrarContactoComponent,
    ListaEstudioComponent,
    NuevoEstudioComponent,
    EditarEstudioComponent,
    BorrarEstudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
