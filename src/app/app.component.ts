import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'recipe-app';
  loadedFeature = 'recipe';
  ngOnInit(){

  }
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
