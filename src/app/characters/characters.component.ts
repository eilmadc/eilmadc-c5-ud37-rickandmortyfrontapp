import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  characters: any = null;
  constructor(private http: HttpClient) { }

  ngOnInit():void{
    this.getAllCharacters();
  }

  //Get all characters
  getAllCharacters() {
    this.http.get("https://rickandmortyapi.com/api/character").subscribe(result => {
      this.characters = result;
      console.log(result);
    }, error => console.log('Error: ' + error));
  }
}
