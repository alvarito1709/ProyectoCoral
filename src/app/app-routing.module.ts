import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RedesComponent } from './components/redes/redes.component';
import { VistaContactoComponent } from './vistas/vista-contacto/vista-contacto.component';
import { VistaErrorComponent } from './vistas/vista-error/vista-error.component';
import { VistaUbicacionComponent } from './vistas/vista-ubicacion/vista-ubicacion.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { TerminosYCondicionesComponent } from './components/terminos-ycondiciones/terminos-ycondiciones.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { PoliticaDeDevolucionesComponent } from './components/politica-de-devoluciones/politica-de-devoluciones.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PasarelaDePagoComponent } from './components/pasarela-de-pago/pasarela-de-pago.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes : Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: VistaContactoComponent },
  { path: 'quienesSomos', component: QuienesSomosComponent },
  { path: 'ubicacion', component: VistaUbicacionComponent },
  { path: 'terminos', component: TerminosYCondicionesComponent},
  { path: 'preguntasFrecuentes', component: PreguntasFrecuentesComponent },
  { path: 'devoluciones', component: PoliticaDeDevolucionesComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'redes', component: RedesComponent },
  { path: 'pasareladepago', component: PasarelaDePagoComponent },
  { path: 'registro', component: RegistroComponent },
{ path: 'login', component: LoginComponent },
  { path: '**', component: VistaErrorComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }