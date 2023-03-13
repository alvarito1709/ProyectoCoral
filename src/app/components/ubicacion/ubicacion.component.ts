import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
    window.addEventListener('load', Aos.refresh)
  }

}
