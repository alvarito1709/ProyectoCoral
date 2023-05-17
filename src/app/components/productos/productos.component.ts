import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/servicios/data-service.service';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { Producto } from 'src/app/entity/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  detergentes: Producto[] = [];
  lavaplatos: Producto[] = [];
  perfumes: Producto[] = [];


  constructor(private datos:DataServiceService, private http:HttpClient, private carro:CarritoService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.detergentes = data.productos.detergente;
      this.lavaplatos = data.productos.lavaplatos;
      this.perfumes = data.productos.perfumes;
    })
  }

  agregarAlCarrito(producto:Producto){
    this.carro.agregarAlCarrito(producto);
    this.carro.$hayProducto.emit(true);
  }


}
