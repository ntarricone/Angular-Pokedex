import { Injectable } from '@angular/core';

import{environment} from "../../environments/environment"
import { HttpClient } from '@angular/common/http';
import { PokemonPackage } from '../models';
import { PokemonDetail } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  api_url = environment.api_url; //propiedad de clase, no necesitas declararla
  constructor(private readonly http: HttpClient) { } //agregar http

  getPokemons(): Observable<PokemonPackage>{
   return this.http.get<PokemonPackage>(`${this.api_url}/pokemon?limit=150`);
  }

  getPokemonByName(name: String): Observable<PokemonDetail>{
    return this.http.get<PokemonDetail>(`${this.api_url}/pokemon/${name}`)
  }
}
