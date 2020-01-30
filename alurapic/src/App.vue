<template>
  <div>
    <h1>{{titulo}}</h1> 
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>  
    </ul>   
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titulo: 'Alura- Curso de VueJs',
      fotos: [{
        url:'assets/logo.png',
        titulo:'Vue',
      },
      {
        url:'assets/logo.png',
        titulo:'Vue',
      }
      
      ],
    }
  }
}
</script>

<style>
</style>
