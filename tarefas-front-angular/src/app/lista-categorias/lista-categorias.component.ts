import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria, CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent {
  tarefas?: Observable<Categoria[]>;

  constructor(private categoriaService: CategoriaService) {
    this.tarefas = categoriaService.getTodas();
  }

  atualizarLista() {
    this.tarefas = this.categoriaService.getTodas();
  }
}
