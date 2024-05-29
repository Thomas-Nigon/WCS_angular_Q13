import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { PokemonListComponent } from './components/ui/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/ui/pokemon-details/pokemon-details.component';
import { AddPokemonPageComponent } from './pages/add-pokemon-page/add-pokemon-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PokedexPageComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    AddPokemonPageComponent,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Q13_pokedex';
}
