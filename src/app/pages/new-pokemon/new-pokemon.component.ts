import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonList } from 'src/app/models';
import { LocalDataService } from 'src/app/services/local-data.service';
import { Router } from '@angular/router';

//TO USE REACTICE FORMS YOU NEED TO IMPORT IT IN THE APP MODULE ********
@Component({
  selector: 'app-new-pokemon',
  templateUrl: './new-pokemon.component.html',
  styleUrls: ['./new-pokemon.component.scss']
})
export class NewPokemonComponent implements OnInit {
  pokemonForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
     private readonly localDataService: LocalDataService,
     private readonly router: Router) { }

  ngOnInit() { //HERE WE ARE CREATING THE FORM
    this.pokemonForm = this.formBuilder.group({
      id: ["", Validators.required],
      name: [""]
    })
  }

  onSubmit(): void{
     const pokemon: PokemonList = {
       id: this.pokemonForm.get("id").value,
       name: this.pokemonForm.get("name").value,
       url: `https://pokeapi.co/api/v2/pokemon/${this.pokemonForm.get("id").value}/`
     }

     this.localDataService.addPokemon(pokemon);

     this.router.navigate(["/home"]); //redirecting to home-page after saving pokemon in localDataService
  }

}
