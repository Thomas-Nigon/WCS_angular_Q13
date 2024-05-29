import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  inject,
} from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon.model';
import { CommonModule } from '@angular/common';
import { PokedexService } from '../../../shared/services/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  @Input() pokemonList: Pokemon[] = [];
  @Output() selectedPokemon: EventEmitter<Pokemon> = new EventEmitter();

  pokedexService = inject(PokedexService);

  ngOnInit(): void {
    /*  this.pokedexService.getPokemonList().subscribe((pokemons) => {
      this.pokemonList = pokemons;
    }); */
  }

  showInfo(pokemon: Pokemon) {
    console.log(pokemon.stats);
    this.selectedPokemon.emit(pokemon);
  }
}
