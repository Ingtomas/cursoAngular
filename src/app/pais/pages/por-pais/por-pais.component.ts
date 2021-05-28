import { Component } from '@angular/core';
import { pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  error: boolean = false;
  paises: pais[] = [];
  paisesSugeridos: pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        console.info(err);
        this.error = true;
        this.paises = [];
      }
    );
  }
  sugerencias(termino: string) {
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 10)),
      (err) => (this.paisesSugeridos = [])
    );
  }
  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
