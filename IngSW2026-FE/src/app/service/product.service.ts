import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Prodotto } from '../dto/prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Prodotto[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(map((rows) => rows.map(this.toProdotto)));
  }

  searchByNome(nome: string): Observable<Prodotto[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search`, {
      params: { nome }
    }).pipe(map((rows) => rows.map(this.toProdotto)));
  }

  getByCategoria(categoriaId: number): Observable<Prodotto[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categoria/${categoriaId}`).pipe(map((rows) => rows.map(this.toProdotto)));
  }

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
