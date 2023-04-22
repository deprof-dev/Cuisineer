import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/Recipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  updateRecipe(id: number, update: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, update)
  }

  deleteRecipe(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
