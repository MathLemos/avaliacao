import { DetalhePage } from './../detalhe/detalhe';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PokedexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokedex',
  templateUrl: 'pokedex.html',
})
export class PokedexPage {


  pokemon: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public usuarioProvider: UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokedexPage');
    this.listarPokemon()
  }

  detalharPokemon (pokemon){
    console.log (pokemon)
  }

  listarPokemon(){ 
    this.usuarioProvider.buscarPokemon().then(
      (data: any) => { 
        this.pokemon = data.pokemon
      }
    )
  }

  abrirPokemon(pokemon){
    this.navCtrl.push(DetalhePage, {pokemon})
  }
  
}
