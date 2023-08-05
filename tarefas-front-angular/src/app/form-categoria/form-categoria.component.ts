import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaService } from '../services/categoria.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent {

  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      nome: '',
    });
  }

  async salvarCategoria() {
    await firstValueFrom(this.categoriaService.adicionar(this.checkoutForm.value));
    alert("Categoria add com sucesso");
    this.router.navigate(["/categorias"]);
  }
}
