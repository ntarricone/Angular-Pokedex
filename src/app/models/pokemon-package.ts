import { PokemonList } from './pokemon-list.interface';

export interface PokemonPackage{
    count: Number;
    next: String;
    previous: String;
    results: PokemonList[];
}