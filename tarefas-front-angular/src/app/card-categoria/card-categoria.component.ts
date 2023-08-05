import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria, CategoriaService } from '../services/categoria.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-categoria',
  templateUrl: './card-categoria.component.html',
  styleUrls: ['./card-categoria.component.css']
})
export class CardCategoriaComponent {
  @Input() categoria?: Categoria;
  @Output() notificarExclusao = new EventEmitter();

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  async excluir() {
    await firstValueFrom(this.categoriaService.deletarPeloId(this.categoria!.id));

    this.notificarExclusao.emit();
  }

  editar() {
    this.router.navigate(['editar-categoria', this.categoria?.id]);
  }
}
