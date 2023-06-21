import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/Persona';


export interface Donation {
  name: string;
  value: number;
  date: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent  {
  listPersona: Persona[] = [];
  form: FormGroup;


  agregarPersona() {

    if (this.form.valid) {
      const persona: Persona = {
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        valorD: this.form.value.valorD,
        promedio: (this.form.value.nota_1 + this.form.value.nota_2) / 2,
        estado: (this.form.value.nota_1 + this.form.value.nota_2)/ 2 >= 7 ,
      }
      this.listPersona.push(persona);
      this.form.reset();
    }
  }

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      valorD:['', [Validators.required, Validators.min(1), ]],

    })
  }

  calcularPromedios(): void {
    this.listPersona.forEach(persona => {

      if (persona.promedio >= 7) {
        persona.estado = true;
      } else {
        persona.estado = false;
      }
    });
  }

  soloNumeros(event: KeyboardEvent) {
    const tecla = event.keyCode || event.which;
    const teclaPermitida = /[0-9]/.test(String.fromCharCode(tecla));
    if (!teclaPermitida) {
      event.preventDefault();
    }
  }
  validarRangoNotas(event: KeyboardEvent) {
    const tecla = event.keyCode || event.which;
    const teclaPermitida = /[0-9]/.test(String.fromCharCode(tecla));
    const valor = Number((event.target as HTMLInputElement).value + String.fromCharCode(tecla));
    if (!teclaPermitida || valor < 1 || valor > 10) {
      event.preventDefault();
    }
  }
  


}
