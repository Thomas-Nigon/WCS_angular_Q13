import { Injectable, inject } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { POKEMON_MOCK_DATA } from '../pokemon.mock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private http = inject(HttpClient);
  myList: Pokemon[] = [];
  private pokemonList = new BehaviorSubject<Pokemon[]>(POKEMON_MOCK_DATA);

  getPokemonList(): Observable<Pokemon[]> {
    return this.pokemonList.asObservable();
  }
  addPokemon(pokemon: Pokemon) {
    const currentList = this.pokemonList.getValue();
    this.pokemonList.next([...currentList, pokemon]);
    console.log(this.pokemonList);
  }
  getPokemons() {
    return this.http.get<Pokemon[]>(
      'https://pokebuildapi.fr/api/v1/pokemon/limit/10'
    );
  }
}
