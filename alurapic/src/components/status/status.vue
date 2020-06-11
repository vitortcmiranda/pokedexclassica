<template>
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
            </div>
            </div>
          </div>
</template>

<script>

export default {
  props:{
    pokemon:{}
  }
}
</script>

<style >
 #pokemonstatus{
    background-color: #30A7D7;
    border-radius: 10px;
    width: 500px;
    height: 200px;
  }
  #namestatus{
    color: white;
  }
</style>
