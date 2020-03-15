<template>
  <!-- Evolution chain -->

  <div class="row">
          <!-- V-for para cada item -->

            <div class="pokec">
              <img class="pokeimg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="">
             </div>

             <div class="pokec">
              <img class="pokeimg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="">
             </div>

             <div class="pokec">
              <img class="pokeimg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="">
             </div>
          </div>
</template>

<script>
export default {
  props:{

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
