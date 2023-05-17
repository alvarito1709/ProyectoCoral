import { HttpClient } from '@angular/common/http';
import { EventEmitter ,Injectable } from '@angular/core';
import { Producto } from '../entity/producto';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  
 public _dato: Producto[] = [];
 private _producto: BehaviorSubject<Producto[]> = new BehaviorSubject(this._dato);
 public producto: Observable<Producto[]> = this._producto.asObservable();
 public costo: number = 0;



  url ='./assets/baseDeDatos.json';
  constructor(private http:HttpClient) { }

  $carrito = new EventEmitter<any>();
  $hayProducto = new EventEmitter<any>();


  
  agregarAlCarrito(producto:Producto){
    let index = this._dato.findIndex(dato=>dato.id === producto.id);
    if(index === -1){
    this._dato.push(producto);
    this.costo = producto.oferta;
  }
  else{
    let cantidad: number = this._dato[index].cantidad + 1;
    let productoNuevo = new Producto (producto.id, producto.nombre, producto.descripcion,
      producto.precio, producto.oferta, producto.imagen, producto.categoria, cantidad);
    this._dato.splice(index, 1,productoNuevo);
    this.costo = producto.oferta * cantidad;
    console.log(this._dato);
  }
  }

}
