import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, NgClass],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  resultado=0;
  n1=0;
  n2=0;
  sumar() {
    this.resultado = this.n1 + this.n2;
    alert("El resultado de la suma es: " + this.resultado);
  }
  restar() {
    this.resultado = this.n1 - this.n2;
    alert("El resultado de la resta es: " + this.resultado);
  }
  multiplicar() {
    this.resultado = this.n1 * this.n2;
    alert("El resultado de la multiplicación es: " + this.resultado);
  }
  dividir() {
    if (this.n2 !== 0) {
      this.resultado = this.n1 / this.n2;
      alert("El resultado de la división es: " + this.resultado);
    } else {
      alert("No se puede dividir por cero");
    }
  }
}