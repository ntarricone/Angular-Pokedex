import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms"

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NewPokemonComponent } from './pages/new-pokemon/new-pokemon.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, PokemonDetailComponent, HomeComponent, NewPokemonComponent],
  imports: [
    BrowserModule,
    HttpClientModule, //IMPORTAR ESTO PARA USAR API
    AppRoutingModule, //IMPORTAR ESTO PARA EL ROUTING
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
