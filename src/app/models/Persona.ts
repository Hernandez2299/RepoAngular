export class Persona {
    nombre: string;
    apellido: string;
    valorD: number;
    promedio: number;
    estado:boolean;
        
    constructor(
        nombre: string, 
        apellido: string, 
        valorD: number, 
        promedio: number, 
        estado: boolean) 
        {
        this.nombre = nombre;
        this.apellido = apellido;
        this.valorD= valorD;
        this.promedio= promedio;
        this.estado=estado;
    }
}