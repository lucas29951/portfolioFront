import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { ListaContactoComponent } from './contacto/lista-contacto.component';
import { NuevoContactoComponent } from './contacto/nuevo-contacto.component';
import { EditarContactoComponent } from './contacto/editar-contacto.component';

import { ListaEstudioComponent } from './estudio/lista-estudio.component';
import { NuevoEstudioComponent } from './estudio/nuevo-estudio.component';
import { EditarEstudioComponent } from './estudio/editar-estudio.component';

import { ListaExperienciaComponent } from './experiencia/lista-experiencia.component';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';

import { EditarPersonaComponent } from './persona/editar-persona.component';

import { ListaProyectoComponent } from './proyecto/lista-proyecto.component';
import { NuevoProyectoComponent } from './proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './proyecto/editar-proyecto.component';

import { ListaTecnologiaComponent } from './tecnologia/lista-tecnologia.component';
import { NuevaTecnologiaComponent } from './tecnologia/nueva-tecnologia.component';
import { EditarTecnologiaComponent } from './tecnologia/editar-tecnologia.component';

import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';

import { DetallePersonaComponent } from './persona/detalle-persona.component';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CarouselProyectoComponent } from './proyecto/carousel-proyecto.component';
import { ExitComponent } from './exit/exit.component';
import { ListaEdicionProyectoComponent } from './proyecto/lista-edicion-proyecto.component';
import { HeaderEmptyComponent } from './header/header-empty.component';

const routes: Routes = [
  /* -----  Ruta de Inicio  ----- */
  { path: '', component: BodyComponent },
  /* -----  Ruta de Login  ----- */
  { path: 'log', component: LoginComponent },
  { path: 'exit', component: ExitComponent },
  /* -----  Rutas de Agregacion de elementos  ----- */
  { path: 'add-contact', component: NuevoContactoComponent },
  { path: 'add-study', component: NuevoEstudioComponent },
  { path: 'add-exp', component: NuevaExperienciaComponent },
  { path: 'add-project', component: NuevoProyectoComponent },
  { path: 'add-tecno', component: NuevaTecnologiaComponent },
  { path: 'add-user', component: NuevoUsuarioComponent },
  /* -----  Rutas de Edicion de elementos  ----- */
  { path: 'modify-contact/:id', component: EditarContactoComponent },
  { path: 'modify-study/:id', component: EditarEstudioComponent },
  { path: 'modify-exp/:id', component: EditarExperienciaComponent },
  { path: 'modify-person/:id', component: EditarPersonaComponent },
  { path: 'modify-project/:id', component: EditarProyectoComponent },
  { path: 'modify-tecno/:id', component: EditarTecnologiaComponent },
  { path: 'modify-user/:id', component: EditarUsuarioComponent },
  /* -----  Rutas de Vista Detalle de elementos  ----- */
  { path: 'view-person/:id', component: DetallePersonaComponent },
  /* -----  Rutas de Lista de elementos  ----- */
  { path: 'show-projects', component: ListaProyectoComponent },
  { path: 'edit-project-list', component: ListaEdicionProyectoComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaContactoComponent,
    NuevoContactoComponent,
    EditarContactoComponent,
    ListaEstudioComponent,
    NuevoEstudioComponent,
    EditarEstudioComponent,
    ListaExperienciaComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    EditarPersonaComponent,
    ListaProyectoComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    ListaTecnologiaComponent,
    NuevaTecnologiaComponent,
    EditarTecnologiaComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    DetallePersonaComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    CarouselProyectoComponent,
    ExitComponent,
    ListaEdicionProyectoComponent,
    HeaderEmptyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
