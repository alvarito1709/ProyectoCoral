import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import * as Aos from 'aos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  carro: boolean = false;

  constructor(private carrito:CarritoService) { }

  ngOnInit(): void {
    this.carrito.$carrito.subscribe(data =>(this.carro = data));
    Aos.init();
    window.addEventListener('load', Aos.refresh)
  }

}
