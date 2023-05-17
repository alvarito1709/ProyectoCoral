export class Producto {
    id:number;
    nombre: string;
    descripcion: string;
    precio:number;
    oferta:number;
    imagen:string;
    categoria: string;
    cantidad: number;

    constructor(id:number, nombre:string, descripcion: string, precio:number, oferta:number,
        imagen:string, categoria:string, cantidad: number){

            this.id = id;
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.precio = precio;
            this.oferta = oferta;
            this.imagen = imagen;
            this.categoria = categoria;
            this.cantidad = cantidad;
        }
}
