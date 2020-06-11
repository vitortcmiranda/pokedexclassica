<template>
    <div class="painel">
                <h1 class="painel-titulo">{{pokemon.id}} - {{pokemon.name}}</h1>
                <div class="painel-corpo">
                  <img class="pokeimg" :src="pokeimg" alt="">

                </div>
            </div>
</template>

<script>
export default {
  props:[
      'pokemon',
      'pokeimg'
  ],
}
</script>

<style scoped>
    .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    vertical-align: top;
    text-align: center;
    border-radius: 15px;
    background-color: white;
    margin: 20px 5px 55px 5px;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
    border-radius: 15px;
  }
  .pokeimg{
    width:50%;
    height: 50%;
  }
  .painel-corpo{}
</style>
