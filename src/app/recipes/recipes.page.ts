import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/Recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  @Input() recipeId: any;
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {
    this.recipeId = undefined;
  }

  ngOnInit() {
    this.getRecipes();
    this.deleteRecipe(this.recipeId);
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  deleteRecipe(id: number): void {
    const remRecipes = this.recipes.filter(recipe => recipe.id !== id)

    this.recipeService.deleteRecipes(id)
      .subscribe(() => this.recipes = remRecipes)
    // console.log(id);
  }

  //receiving a wrong output of endpoint
}
