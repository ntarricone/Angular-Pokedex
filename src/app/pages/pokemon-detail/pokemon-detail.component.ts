import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from 'src/app/models';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: PokemonDetail;

  constructor(private readonly heroService: HeroService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get("name");
    this.heroService.getPokemonByName(name).subscribe(pokemonByName => this.pokemon = pokemonByName)
  }

}
