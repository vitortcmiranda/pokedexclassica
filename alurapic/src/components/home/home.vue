<template>
  <div class="cardboard">

     <div class="container">

           <div class="container">
  <div class="row">
    <div class="col">
    </div>
    <div class="col" >
      <img class="logo" :src="logo" alt="">
    </div>
    <div class="col">
    </div>
    </div>
  <div class="row">
    <div class="col" style="background-color:grey">
      <meu-painel :pokeimg="image"
                    :pokemon="pokemon"/>
    </div>
    <div class="col-1">
    </div>
    <div class="col">
      <div class="row">
        <status :pokemon="pokemon"></status>
      </div>
      <div class="row">
      </div>
      <div class="row">
        <evolucoes></evolucoes>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div clas="btnpoke">
         <button id="btnVoltar" type="button" class="btn btn-primary" :disabled="id<2" v-on:click="voltarpoke">Voltar</button>
                <button type="button" class="btn btn-success"
                :disabled="id>=150"
                 v-on:click="avancarpoke">Avançar</button>
      </div>
    </div>
    <div class="col-1">
    </div>
    <div class="col">
    </div>
  </div>
</div>

      </div>
</div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue'
import evolucoes from '../evolucoes/evolucoes.vue'
import boxesvue from '../boxes.vue'
import status from '../status/status'
export default {
  components: {
    'meu-painel' : Painel,
    'evolucoes' : evolucoes,
    'boxesvue': boxesvue,
    'status': status

  },

  name: 'pokedex',
  data () {
    return {
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
  .col{
    text-align: center;
  }
  .container {
    background-color: brown;
    border-radius: 15px;
  }
  .h1{
    text-align: center;
  }
  .teste{
    text-align: center;
  }
  .logo{
    width:90%;
    height:60%;
  }
  .btnpoke{
    text-align: center;
  }

</style>
