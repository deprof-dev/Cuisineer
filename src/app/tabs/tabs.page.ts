import { Component, OnInit } from '@angular/core';


import { ShoppingListPage } from '../shopping-list/shopping-list.page';
import { RecipesPage } from '../recipes/recipes.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  slPage = ShoppingListPage;
  recipes = RecipesPage

}
