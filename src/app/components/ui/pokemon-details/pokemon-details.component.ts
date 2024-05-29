import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent {
  @Input() pokemon!: Pokemon;

  ngOnInit(): void {
    console.log(this.pokemon);
  }
}
