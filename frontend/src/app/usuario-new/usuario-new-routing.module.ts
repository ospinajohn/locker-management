import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioNewPage } from './usuario-new.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioNewPageRoutingModule {}
