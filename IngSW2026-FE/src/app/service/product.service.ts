import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodotto } from '../dto/prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // URL backend per i prodotti.
  private readonly apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {
  }

  // Prende tutti i prodotti senza alterare la risposta del backend.
  getAllProducts(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.apiUrl);
  }

  // Ricerca prodotti per nome.
  searchByNome(nome: string): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(`${this.apiUrl}/search`, {
      params: { nome }
    });
  }

  // Filtra i prodotti per id categoria.
  getByCategoria(categoriaId: number): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(`${this.apiUrl}/categoria/${categoriaId}`);
  }
}
