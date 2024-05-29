import { Routes } from '@angular/router';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { AddPokemonPageComponent } from './pages/add-pokemon-page/add-pokemon-page.component';

export const routes: Routes = [
  { path: '', component: PokedexPageComponent },
  { path: 'create', component: AddPokemonPageComponent },
];
