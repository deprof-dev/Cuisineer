import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/Recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes'

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl)
  }
}
