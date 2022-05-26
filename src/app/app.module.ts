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

import { ListaPersonaComponent } from './persona/lista-persona.component';
import { NuevaPersonaComponent } from './persona/nueva-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona.component';

import { ListaProyectoComponent } from './proyecto/lista-proyecto.component';
import { NuevoProyectoComponent } from './proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './proyecto/editar-proyecto.component';

import { ListaTecnologiaComponent } from './tecnologia/lista-tecnologia.component';
import { NuevaTecnologiaComponent } from './tecnologia/nueva-tecnologia.component';
import { EditarTecnologiaComponent } from './tecnologia/editar-tecnologia.component';

import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';

import { DetalleContactoComponent } from './contacto/detalle-contacto.component';
import { DetalleEstudioComponent } from './estudio/detalle-estudio.component';
import { DetalleExperienciaComponent } from './experiencia/detalle-experiencia.component';
import { DetallePersonaComponent } from './persona/detalle-persona.component';
import { DetalleProyectoComponent } from './proyecto/detalle-proyecto.component';
import { DetalleTecnologiaComponent } from './tecnologia/detalle-tecnologia.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CarouselProyectoComponent } from './proyecto/carousel-proyecto.component';

const routes: Routes = [
  /* -----  Ruta de Inicio  ----- */
  { path: '', component: BodyComponent },
  /* -----  Ruta de Login  ----- */
  { path: 'log', component: LoginComponent },
  /* -----  Rutas de Agregacion de elementos  ----- */
  { path: 'add-contact', component: NuevoContactoComponent },
  { path: 'add-study', component: NuevoEstudioComponent },
  { path: 'add-exp', component: NuevaExperienciaComponent },
  { path: 'add-person', component: NuevaPersonaComponent },
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
  { path: 'view-contact/:id', component: DetalleContactoComponent },
  { path: 'view-study/:id', component: DetalleEstudioComponent },
  { path: 'view-exp/:id', component: DetalleExperienciaComponent },
  { path: 'view-person/:id', component: DetallePersonaComponent },
  { path: 'view-project/:id', component: DetalleProyectoComponent },
  { path: 'view-tecno/:id', component: DetalleTecnologiaComponent },
  { path: 'view-user/:id', component: DetalleUsuarioComponent },
  /* -----  Rutas de Lista de elementos  ----- */
  { path: 'show-projects', component: ListaProyectoComponent },
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
    ListaPersonaComponent,
    NuevaPersonaComponent,
    EditarPersonaComponent,
    ListaProyectoComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    ListaTecnologiaComponent,
    NuevaTecnologiaComponent,
    EditarTecnologiaComponent,
    ListaUsuarioComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    DetalleContactoComponent,
    DetalleEstudioComponent,
    DetalleExperienciaComponent,
    DetallePersonaComponent,
    DetalleProyectoComponent,
    DetalleTecnologiaComponent,
    DetalleUsuarioComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    CarouselProyectoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
