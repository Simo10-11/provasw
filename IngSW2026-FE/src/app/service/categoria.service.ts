import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Categoria } from '../dto/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly apiUrl = 'http://localhost:8080/categorie';

  constructor(private http: HttpClient) {
  }

  getAllCategorie(): Observable<Categoria[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((rows) => rows.map((row) => ({
        ID: row.ID ?? row.id,
        NOME: row.NOME ?? row.nome,
        DESCRIZIONE: row.DESCRIZIONE ?? row.descrizione
      } as Categoria)))
    );
  }
}
