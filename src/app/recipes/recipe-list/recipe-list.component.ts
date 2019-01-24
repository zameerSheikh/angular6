import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'simply a test', 'http://www.bakersedge.com/images/Recipe_Signature_Cookie_Bars.jpg'),
    new Recipe('A test recipe', 'simply a test', 'http://www.bakersedge.com/images/Recipe_Signature_Cookie_Bars.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
