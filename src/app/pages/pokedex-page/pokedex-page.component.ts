import { Component, Input, inject } from '@angular/core';
import { PokemonListComponent } from '../../components/ui/pokemon-list/pokemon-list.component';
import { PokedexService } from '../../shared/services/pokedex.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pokemon } from '../../shared/models/pokemon.model';
import { PokemonDetailsComponent } from '../../components/ui/pokemon-details/pokemon-details.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [
    PokemonListComponent,
    HttpClientModule,
    PokemonDetailsComponent,
    RouterLink,
  ],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.scss',
})
export class PokedexPageComponent {
  pokemonList: Pokemon[] = [];
  fetchedPokemonList!: Pokemon[];
  pokemon!: Pokemon;
  pokedexService = inject(PokedexService);

  ngOnInit() {
    this.pokedexService
      .getPokemonList()
      .subscribe(
        (data) => ((this.pokemonList = data), console.log(this.pokemonList))
      );
  }
  onPokemonSelected(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }
  addPokemon(pokemon: Pokemon) {
    this.pokedexService.addPokemon(pokemon);
  }
}
