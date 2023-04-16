import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/Recipe';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl)
  }

  uploadRecipe(newRecipe: any, options: any): Observable<any> {
    return this.http.post(this.apiUrl, newRecipe, options)
  }

  deleteRecipes(id: number): Observable<any> {
    // const url = this.apiUrl
    return this.http.delete<Recipe>(`${this.apiUrl}/${id}`)
  }
}
