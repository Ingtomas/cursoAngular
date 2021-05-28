import { Component } from '@angular/core';
import { pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = '';
  error: boolean = false;
  paises: pais[] = [];
  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.error = true;
        this.paises = [];
      }
    );
  }
}
