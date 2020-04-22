<template>
  <!-- Evolution chain -->

  <div class="row">
          <!-- V-for para cada item -->

            <div class="pokec" v-for="item in items">
              <img class="pokeimg" :src="url()" alt="">
             </div>
          </div>
</template>

<script>
export default {
 data () {
    return {
     items:[1,2,3],
     pokemon:[]
    }
  },
  props:[
    'species',

  ],
  methods:{
    teste () {console.log('teste')},
    url(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.species}.png`
    },
    evolution(id = 1){
      this.id = id;
    try { this.$http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then(res => res.json())
      .then(pokemon => this.pokemon = pokemon, err=> console.log(err));
      }catch(err){
        console.log('Erro ao buscar pokemon');
      }

    }
  },
   created () {
     console.log('specie:' + this.pokemon)
  },
  // watch () {
  //   evolution(1)
  // },
  updated ( ) {
    this.evolution();
  }
}
</script>

<style scoped>

  .pokec{
    box-shadow: 0 4px 4px 0px #212121;
    border:10px solid;
    border-color: white;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    width: 120px;
    height:120px;
    margin: 25px;

  }
  .pokec .pokeimg{
    width: 100px;
    height: 100px;
  }
</style>
