import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //HAY QUE IMPORTAR ESTO
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NewPokemonComponent } from './pages/new-pokemon/new-pokemon.component';

//METER RUTAS + IMPORTS
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pokemon/:name', component: PokemonDetailComponent},
  {path: 'new', component: NewPokemonComponent}, //creado ruta donde se vera el componente
  {path: '**', pathMatch: 'full', redirectTo:'home'} //si no pones ruta correcta te redirije a home
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
