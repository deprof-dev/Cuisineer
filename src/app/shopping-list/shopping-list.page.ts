import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeService } from '../services/recipe.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})


export class ShoppingListPage implements OnInit {
  myForm: FormGroup;
  // public alertButtons = ['OK'];

  // ingredient: string = '';
  // quantity: number = 1;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private recipeService: RecipeService,) {
    this.myForm = this.formBuilder.group({
      ingredient: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }



  ngOnInit() {
  }

  onClick() {
    // form-value validation
    if (!this.myForm.valid) {
      alert('Please enter an ingredient or value to add!')
    } else {
      const { ingredient, quantity } = this.myForm.value
      // this.ingredient = ingredient;
      // this.quantity = quantity
      let newRecipe = {
        ingredient,
        quantity
      }

      this.recipeService.uploadRecipe(newRecipe, httpOptions).subscribe((response) => this.router.navigate(['/recipes', response]))

      // this.http.post('http://localhost:3000/recipes', newRecipe, httpOptions).subscribe(
      //   response => {

      // Navigate to the next page with the form data
      //   this.router.navigate(['/recipes', response]);
      // }),
      this.myForm.reset();
    }
  }
}
