import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TabsComponent } from '../tabs/tabs.component';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipesPage } from './recipes.page';
import { ShoppingListPageModule } from '../shopping-list/shopping-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPageRoutingModule,
    ShoppingListPageModule
  ],
  declarations: [RecipesPage, TabsComponent],
  exports: [TabsComponent,]
})
export class RecipesPageModule { }
