import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Producto } from 'src/app/entity/producto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { DataServiceService } from 'src/app/servicios/data-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: Producto[] = [];
  hayProductos: boolean = this.hayProducto();
  cantidad: number = 0;
  totalProducto: number = 0;
  totalCompra: number = 0;
  form: FormGroup;
  total: number = 0;

  constructor(private carro:CarritoService, private dataS:DataServiceService,
    private formBuilder: FormBuilder) { 
      this.form = this.formBuilder.group({
        cantidad:[""]
      })
    }


  ngOnInit(): void {
    this.carro.producto.subscribe(dato=>{
      this.productos = dato;
    })

    this.sumaProducto();

    console.log(this.hayProductos);
  }

  cerrarCarrito(){
    this.carro.$carrito.emit(false)
  }

  agregarAlCarrito(id:number){
    this.dataS.obtenerDatos().subscribe(data=>{
      if(data.id == id){
        this.productos = data;
      };
    })
  }

  get Cantidad(){
    return this.form.get('cantidad');
  }

  sumaProducto(){
  let sumatoria = 0;
  this.productos.forEach(producto =>{
    sumatoria += producto.cantidad * producto.oferta;
  });
  return sumatoria.toFixed(2);
  }

  hayProducto(): boolean{
  return this.carro._dato.length !== 0;
  }

}
