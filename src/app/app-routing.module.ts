import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { VistaContactoComponent } from './vistas/vista-contacto/vista-contacto.component';


const routes : Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: VistaContactoComponent },
{ path: 'login', component: LoginComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }