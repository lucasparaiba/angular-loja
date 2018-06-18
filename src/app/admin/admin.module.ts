import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { HomeAdminComponent } from './homeadmin/home-admin.component';
import { PaginaNotFoundAdminComponent } from './paginanotfound/pagina-not-found-admin.component';
import { CadastroDeProdutoComponent } from './cadastroproduto/cadastro-de-produto.component';
import { ListaDeProdutosComponent } from './listaprodutos/lista-de-produtos.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, HomeAdminComponent, PaginaNotFoundAdminComponent, CadastroDeProdutoComponent, ListaDeProdutosComponent, ProdutoComponent]
})
export class AdminModule { }
