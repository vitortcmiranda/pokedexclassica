<template>
  <div class="cardboard">
    <h1>{{titulo}}</h1> 
    
   
   
     <div class="container">
       <img id="logo" :src="logo" alt="">
      <div class="row">
        <div class="col-sm">
            <div id="pokemonImg">
                <h1 id="pokemonNome">{{pokemon.id}} - {{pokemon.name}}</h1>
                <img id="pokeimg" :src="image" alt="">
            
            </div>
            <div class="cardboard" id="buttonsavancar">
                <button id="btnVoltar" type="button" class="btn btn-primary" :disabled="id<2" v-on:click="voltarpoke">Voltar</button>
                <button type="button" class="btn btn-success" 
                :disabled="id>=150"
                 v-on:click="avancarpoke">Avançar</button>

            </div>
        </div>
        <div class="col-sm">
          <div class="cardboard"> 
            <div id="pokemondesc">
                <p id="desc">{{pokemondes}}</p>
            </div>
           <div>
              <div class="cardboard" id="bluestuff">
                <div class="row"> <div id="span" class="border border-primary"></div>
                <div id="span" class="border border-primary"></div>
                 <div id="span" class="border border-primary"></div>
                <div id="span" class="border border-primary"></div>
                 <div id="span" class="border border-primary"></div>
                <div id="span" class="border border-primary"></div>
                 <div id="span" class="border border-primary"></div>
                <div id="span" class="border border-primary"></div>
                 <div id="span" class="border border-primary"></div>
                <div id="span" class="border border-primary"></div>
                </div>
                <div class="row"> <div id="span" class="border border-primary"></div>
                <div id="span" class="border border-primary"></div>
                 <div id="span" class="border border-primary"></div>
                <div id="span" class="border border-primary"></div>
                 <div id="span" class="border border-primary"></div>
                <div id="span" class="border border-primary"></div>
                 <div id="span" class="border border-primary"></div>
                <div id="span" class="border border-primary"></div>
                 <div id="span" class="border border-primary"></div>
                <div id="span" class="border border-primary"></div>
                </div>
               
                
              </div>  
          </div>
           <div id="pokemonstatus">
             <div class="cardboard" id="insidestatus">
               <div class="row">
                  <div class="col" id="namestatus">Height</div>
                  <div class="col" id="namestatus">Type</div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="" >{{pokemon.height}}</label>
                  </div>
                  <div class="col">
                    <ul id="tipopoke">
                      <li v-for="(tipo, index) in pokemon.types">
                        {{ tipo.type.name }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col" id="namestatus">Weight</div>
                  <div class="col" id="namestatus">Abilities</div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="" >{{pokemon.weight}}</label>
                  </div>
                  <div class="col">
                    <ul id="listahablidade">
                      <li v-for="(habilidades, index) in pokemon.abilities">
                        {{ habilidades.ability.name }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col" id="namestatus">Gender</div>
                </div>
                <div class="row">
                 <div class="col">
                   Male and Female
                 </div>
                </div>
            </div>
            </div>
          </div>
        </div>
        
       
      </div>
</div>

     
     
    
  </div>
</template>

<script>
export default {
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
    try
   {this.$http.get('https://pokeapi.co/api/v2/pokemon/1/')
      .then(res => res.json())
      .then(pokemon => this.pokemon = pokemon, err=> console.log(err));

  }catch(err){
    console.log(err);
  }
    if(this.pokemon.data){
      console.log(this.pokemon)
    }
  id = this.pokemon.id;
 
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
      console.log('valor de x',x);
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
  #pokemonImg{
    background-color: white;
    margin : 30px;
    border-radius: 15px;
    border-block-color: black;
  }
  #pokemonNome{
    margin-left: 100px;
  }
  #pokemondesc{
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
  #pokeimg{
    width: 475px;
    height: 475px;
  }
</style>
