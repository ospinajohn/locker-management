import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioNewPageRoutingModule } from './usuario-new-routing.module';

import { FormComponent } from './form/form.component';
import { UsuarioNewPage } from './usuario-new.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		UsuarioNewPageRoutingModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [UsuarioNewPage, FormComponent],
})
export class UsuarioNewPageModule {}
