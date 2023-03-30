import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingListPageRoutingModule } from './shopping-list-routing.module';


import { ShoppingListPage } from './shopping-list.page';
import { TabsComponent } from '../tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingListPageRoutingModule,
  ],
  declarations: [ShoppingListPage, TabsComponent],
  exports: [TabsComponent]
})
export class ShoppingListPageModule { }
