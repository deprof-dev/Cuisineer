import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingListPageRoutingModule } from './shopping-list-routing.module';


import { ShoppingListPage } from './shopping-list.page';
import { TabsComponent } from '../tabs/tabs.component';
import { ButtonComponent } from '../button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingListPageRoutingModule,
  ],
  declarations: [ShoppingListPage, TabsComponent, ButtonComponent],
  exports: [TabsComponent, ButtonComponent]
})
export class ShoppingListPageModule { }
