import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models';
import { HeroService } from 'src/app/services/hero.service';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonList: PokemonList[];
  constructor(private readonly heroService: HeroService,
    private readonly localDataService: LocalDataService){

  } //inyectable
  
  ngOnInit(): void{
    this.heroService
    .getPokemons()
    .subscribe( pokemon => {
      this.pokemonList = pokemon.results
      this.pokemonList = this.pokemonList.concat(this.localDataService.getPokemonLocal());
    })
  }

  getImage(url: string) {
    const imageURL =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const urlSplit = url.split("/");
    const id = urlSplit[urlSplit.length - 2];
    return `${imageURL}${id}.png`;
  }

}
