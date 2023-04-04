import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListPageModule } from './shopping-list/shopping-list.module';
import { RecipePageModule } from './recipe/recipe.module';
import { RecipesPageModule } from './recipes/recipes.module';
import { EditRecipePageModule } from './edit-recipe/edit-recipe.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonComponent } from './button/button.component';
import { ShoppingListPage } from './shopping-list/shopping-list.page';

@NgModule({
  declarations: [AppComponent, TabsComponent, ShoppingListPage,],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RecipePageModule, RecipesPageModule, EditRecipePageModule, ShoppingListPageModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
