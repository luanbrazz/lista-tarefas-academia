import { Component } from '@angular/core';
import { Categoria, CategoriaService } from '../services/categoria.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent {

  categorias: Observable<Categoria[]>;

  //Injeção de dependência
  //Trazemos o service para o componente
  constructor(private categoriaService: CategoriaService) {
    this.categorias = categoriaService.getTodas();
  }

  atualizarLista() {
    this.categorias = this.categoriaService.getTodas();
  }
}
