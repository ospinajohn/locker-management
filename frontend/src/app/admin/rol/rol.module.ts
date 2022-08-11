import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolPageRoutingModule } from './rol-routing.module';

import { RolPage } from './rol.page';
import { RolItemComponent } from './rol-item/rol-item.component';
import { RolListComponent } from './rol-list/rol-list.component';
import { OneItemComponent } from './one-item/one-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolPageRoutingModule,
  ],
  declarations: [RolPage, RolItemComponent, RolListComponent,OneItemComponent]
})
export class RolPageModule {}
