import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    QuienesSomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
