import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { AdicionarTarefaComponent } from './adicionar-tarefa/adicionar-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { AdicionarCategoriaComponent } from './adicionar-categoria/adicionar-categoria.component';

const routes: Routes = [
  {
    path: "",
    component: ListaTarefasComponent
  },
  {
    path: "adicionar",
    component: AdicionarTarefaComponent
  },
  {
    path: "editar-tarefa/:tarefaId",
    component: EditarTarefaComponent
  },
  {
    path: "categorias",
    component: ListaCategoriasComponent
  },
  {
    path: "addCategoria",
    component: AdicionarCategoriaComponent
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
