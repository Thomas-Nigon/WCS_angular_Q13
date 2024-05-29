import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { PokedexService } from '../../shared/services/pokedex.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-pokemon-page',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [PokedexService],
  templateUrl: './add-pokemon-page.component.html',
  styleUrl: './add-pokemon-page.component.scss',
})
export class AddPokemonPageComponent {
  constructor(private fb: NonNullableFormBuilder) {}
  public addPokemonForm!: FormGroup;

  pokedexService = inject(PokedexService);
  ngOnInit() {
    this.addPokemonForm = this.fb.group({
      name: ['Tygnon'],
      image: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png',
      ],
      stats: this.fb.group({
        hp: [50],
        attack: [105],
        defense: [79],
        special_attack: [36],
        special_defense: [110],
        speed: [76],
      }),
    });
  }
  onSubmit() {
    this.pokedexService.addPokemon(this.addPokemonForm?.value);
    console.log(this.addPokemonForm.value);
  }
}
