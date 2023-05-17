import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../entity/producto';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public _nombre: string = '';
  private _dato: BehaviorSubject<any> = new BehaviorSubject(this._nombre) ;
  public nombre: Observable<any> = this._dato.asObservable();


  constructor(private http:HttpClient) { }


  obtenerDatos(): Observable<any>{
   return this.http.get('./assets/baseDeDatos.json');
  }

  almacenarDatos(){
    let dato = this.http.get('./assets/baseDeDatos.json');
    return dato;
  }

  obtenerNombre(alias:string){
    this._nombre = alias;
  }

}
