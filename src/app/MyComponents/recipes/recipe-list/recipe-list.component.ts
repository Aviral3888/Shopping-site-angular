import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg'),
    new Recipe('Test Recipe 2', 'This is simply a test 2', 'https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg'),
      
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
