import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Prodotto } from '../dto/prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // URL backend per i prodotti.
  private readonly apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {
  }

  // Prende tutti i prodotti e li normalizza nel formato DTO atteso dal frontend.
  getAllProducts(): Observable<Prodotto[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(map((rows) => rows.map(this.toProdotto)));
  }

  // Ricerca prodotti per nome.
  searchByNome(nome: string): Observable<Prodotto[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search`, {
      params: { nome }
    }).pipe(map((rows) => rows.map(this.toProdotto)));
  }

  // Filtra i prodotti per id categoria.
  getByCategoria(categoriaId: number): Observable<Prodotto[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categoria/${categoriaId}`).pipe(map((rows) => rows.map(this.toProdotto)));
  }

  // Uniforma i campi: supporta sia maiuscolo (DB style) sia camelCase/minuscolo.
  private toProdotto(row: any): Prodotto {
    return {
      ID: row.ID ?? row.id,
      NOME: row.NOME ?? row.nome,
      DESCRIZIONE: row.DESCRIZIONE ?? row.descrizione,
      PREZZO: row.PREZZO ?? row.prezzo,
      QUANTITA_DISPONIBILE: row.QUANTITA_DISPONIBILE ?? row.quantitaDisponibile ?? row.quantita_disponibile,
      ID_CATEGORIA: row.ID_CATEGORIA ?? row.idCategoria ?? row.id_categoria
    };
  }
}
