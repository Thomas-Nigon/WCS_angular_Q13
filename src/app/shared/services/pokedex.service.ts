import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private http = inject(HttpClient);
  myList: Pokemon[] = [];
  constructor() {}
  getPokemons() {
    return this.http.get<Pokemon[]>(
      'https://pokebuildapi.fr/api/v1/pokemon/limit/10'
    );
  }
  addPokemon(pokemon: Pokemon) {
    console.log('add pokemon:', pokemon);
    this.getPokemons().subscribe((data) => {
      this.myList = data;
      this.myList.push(pokemon);
      console.table(this.myList);
    });
    return this.myList;
  }
}
