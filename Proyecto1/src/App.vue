<template>
  <div id="app">
    <img src="./assets/logo.png">
    <componenteA/>
    <componenteC/>
  </div>
</template>

<script>

import componenteA from './components/componente/componenteA'
import componenteC from './components/componente/componenteC'


export default {
  name: 'App',
  components: {
    componenteA,
    componenteC
    
  }
}
</script>

<style>
#app {

  text-align: center;
  margin-top: 10px;
  background-color:aquamarine;
}


</style>
