import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population'
    );
  }

  constructor(private Http: HttpClient) {}

  buscarPais(termino: string): Observable<pais[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.Http.get<pais[]>(url, { params: this.httpParams });
  }
  buscarCapital(termino: string): Observable<pais[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.Http.get<pais[]>(url, { params: this.httpParams });
  }
  getPaisAlpha(id: string): Observable<pais> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.Http.get<pais>(url);
  }
  buscarRegion(region: string): Observable<pais[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.Http.get<pais[]>(url, { params: this.httpParams });
  }
}
