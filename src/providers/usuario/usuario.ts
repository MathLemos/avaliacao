import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsuarioProvider Provider');
  }

  buscarPokemon() {
    return new Promise((resolve) => {
      this.http.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').subscribe(
        (data) => {
          resolve(data)
        },
        (err) => {
          resolve('error')
          console.error(err)
        },
      )
    })
  }
 }
