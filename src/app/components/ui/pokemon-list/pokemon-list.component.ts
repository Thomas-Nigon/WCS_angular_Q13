import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon.model';
import { CommonModule } from '@angular/common';

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

  showInfo(pokemon: Pokemon) {
    console.log(pokemon.stats);
    this.selectedPokemon.emit(pokemon);
  }
}
