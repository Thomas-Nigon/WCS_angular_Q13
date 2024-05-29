import { Component, inject } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PokedexService } from '../../shared/services/pokedex.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-pokemon-page',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './add-pokemon-page.component.html',
  styleUrl: './add-pokemon-page.component.scss',
})
export class AddPokemonPageComponent {
  router = inject(Router);

  constructor(private fb: NonNullableFormBuilder) {}
  public addPokemonForm!: FormGroup;

  pokedexService = inject(PokedexService);
  ngOnInit() {
    this.addPokemonForm = this.fb.group({
      name: ['Tygnon', [Validators.required]],
      image: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png',
        [Validators.required],
      ],
      stats: this.fb.group({
        hp: [50, [Validators.required]],
        attack: [105, [Validators.required]],
        defense: [79, [Validators.required]],
        special_attack: [36, [Validators.required]],
        special_defense: [110, [Validators.required]],
        speed: [76, [Validators.required]],
      }),
    });
  }
  onSubmit() {
    this.pokedexService.addPokemon(this.addPokemonForm?.value);
    console.log(this.addPokemonForm.value);
    this.router.navigate(['/']);
  }
}
