import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Categoria = {
  id: string;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http: HttpClient) { }

  getTodas() {
    return this.http.get<Categoria[]>("http://localhost:8080/categorias");
  }

  deletarPeloId(id: string) {
    return this.http.delete("http://localhost:8080/categorias/" + id);
  }

  adicionar(categoria: Categoria) {
    return this.http.post("http://localhost:8080/categorias", categoria);
  }

  buscarPorId(id: string) {
    return this.http.get<Categoria>("http://localhost:8080/categorias/" + id);
  }

  atualizarPeloId(id: string, categoria: Categoria) {
    return this.http.put("http://localhost:8080/categorias/" + id, categoria);
  }
}
