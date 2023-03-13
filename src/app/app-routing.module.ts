import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { VistaContactoComponent } from './vistas/vista-contacto/vista-contacto.component';
import { VistaQuienesSomosComponent } from './vistas/vista-quienes-somos/vista-quienes-somos.component';
import { VistaUbicacionComponent } from './vistas/vista-ubicacion/vista-ubicacion.component';


const routes : Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: VistaContactoComponent },
  { path: 'quienesSomos', component: VistaQuienesSomosComponent },
  { path: 'ubicacion', component: VistaUbicacionComponent },
{ path: 'login', component: LoginComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }