import { Injectable } from '@angular/core';
import { PokemonList } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  pokemonListLocal: PokemonList[] = [];

  constructor() { }

  addPokemon(pokemon: PokemonList){
    this.pokemonListLocal.push(pokemon);
  }

  getPokemonLocal(): PokemonList[]{
    return this.pokemonListLocal;
  }


}
