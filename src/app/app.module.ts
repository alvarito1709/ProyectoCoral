import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { VistaContactoComponent } from './vistas/vista-contacto/vista-contacto.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { VistaQuienesSomosComponent } from './vistas/vista-quienes-somos/vista-quienes-somos.component';
import { VistaUbicacionComponent } from './vistas/vista-ubicacion/vista-ubicacion.component';
import { RedesComponent } from './components/redes/redes.component';
import { ErrorComponent } from './components/error/error.component';
import { VistaErrorComponent } from './vistas/vista-error/vista-error.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';
import { TerminosYCondicionesComponent } from './components/terminos-ycondiciones/terminos-ycondiciones.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { PoliticaDeDevolucionesComponent } from './components/politica-de-devoluciones/politica-de-devoluciones.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PasarelaDePagoComponent } from './components/pasarela-de-pago/pasarela-de-pago.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    LoginComponent,
    BannerComponent,
    UbicacionComponent,
    ContactoComponent,
    FooterComponent,
    VistaContactoComponent,
    QuienesSomosComponent,
    VistaQuienesSomosComponent,
    VistaUbicacionComponent,
    RedesComponent,
    ErrorComponent,
    VistaErrorComponent,
    ProductosComponent,
    FormularioContactoComponent,
    TerminosYCondicionesComponent,
    PreguntasFrecuentesComponent,
    PoliticaDeDevolucionesComponent,
    CarritoComponent,
    PasarelaDePagoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
