import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})

export class ShoppingListPage implements OnInit {
  myForm: FormGroup;

  ingredient: string = '';
  quantity: number = 1;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
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
      alert('Please enter something to add!')
    } else {
      const value = this.myForm.value
      this.ingredient = value.ingredient;
      this.quantity = value.quantity
      // this.router.navigate(['/recipes',]);
    }

  }

  //   const newRecipe = {
  //     ingredient: this.ingredient,
  //     quantity: this.quantity
  //   }

  //   this.http.post('http://localhost:3000/users', this.ingredient).subscribe(
  //     response => {
  //       console.log(response);

  //       // Navigate to the next page with the form data
  //       this.router.navigate(['/recipes', response]);
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // this.router.navigate(['/recipes'])
}
