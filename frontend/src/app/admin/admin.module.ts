import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { PerfilItemComponent } from './perfil-item/perfil-item.component';
import { UsuarioItemComponent } from './usuario-item/usuario-item.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, AdminPageRoutingModule],
	declarations: [AdminPage, UsuarioItemComponent, UsuarioListComponent,PerfilItemComponent],
})
export class AdminPageModule {}
