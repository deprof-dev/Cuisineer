import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {

  constructor() { }


  logForm(text: string) {
    console.log(text)
  }
  
  ngOnInit() {
  }

}
// @Component({
//   template: `
    
//   `,
// })
// export class FormsPage {
//   todo = {}
//   logForm() {
//     console.log(this.todo)
//   }
// }