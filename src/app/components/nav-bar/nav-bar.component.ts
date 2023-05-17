import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { DataServiceService } from 'src/app/servicios/data-service.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  nombre: string = '';

  existeNombre: boolean = false;

  hayProductos: boolean = false;

  constructor(private carrito: CarritoService, private data:DataServiceService) { }

  ngOnInit(): void {
    this.hayProducto();
    this.nombreActual();
    this.hayNombre();
  }

  abrirCarrito(){
    this.carrito.$carrito.emit(true);
  }

  hayProducto(){
    
    this.carrito.$hayProducto.subscribe(data=>{
      this.hayProductos = data;
    })
  }

  nombreActual(){
   this.nombre = this.data._nombre;
  }

  hayNombre(){
    if(this.nombre.length !== 0){
      this.existeNombre = true;
    }
    else{
      this.existeNombre = false;
    }
  }

}
