<template>
  <div class="cardboard">
    <h1>{{titulo}}</h1>

  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {
  components: {
    'meu-painel' : Painel
  },

  name: 'app',
  data () {
    return {
      titulo: 'Alura- Curso de VueJs',
      logo:'src/assets/pokemon.png',
      pokemonName:'',
      pokemonNumero:'',
      pokemondes:`Bem vindo a Pokedex, meu nome é professor Carvalho`,
      pokemon: [],
      image: 'src/assets/oak.png',
      id: 0,
    }
  },
  created () {
  },
 methods: {
    avancarpoke (id) {
      this.id++;
      this.carregapoke(this.id);


 },
    voltarpoke(id) {
      this.id--;
      this.carregapoke(this.id);
    }

    ,
    carregapoke(id = 1){
      this.id = id;
    try { this.$http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(pokemon => this.pokemon = pokemon, err=> console.log(err));
      }catch(err){
        console.log('Erro ao buscar pokemon');
      }
      let x = this.quantidadeId(this.id);
      this.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${x}.png`;
    },
    quantidadeId (id) {
        if(id < 10){
          id = '00'+id;
          console.log(id);
          return id;
      }
        if(id<100){
          id = '0'+id;
          return id;
        }
        return id;
    },

 }

}
</script>

<style>
  .container{
    background-color: brown;
    border-radius: 15px;
  }
  #logo{
    width: 400px;
    margin-left: 30%;
  }
  .label{
    font-size: 15p;
    font-family: sans-serif;
  }
  #pokemonNome{
    margin-left: 100px;
  }
  .pokemondesc{
    background-color: green;
    margin: 30px;
    border-radius: 10px;
  }
  #desc{
    margin: 10px;
    font-family: sans-serif;
    font-size: 33px;
  }
  #span{
    width: 50px;
    height: 50px;
    background-color: aqua;
    border-radius: 5px;
  }
  #bluestuff{
    margin: 30px;
  }
  #buttonsavancar{
    margin-left: 180px;
    margin-bottom: 50px;
  }
  #pokemonstatus{
    background-color: #30A7D7;
    margin: 30px;
    border-radius: 10px;
  }
  #namestatus{
    color: white;
  }
  #insidestatus{
    margin: 10px;
  }
  .pokeimg{
    width: 475px;
    height: 475px;
  }
</style>
