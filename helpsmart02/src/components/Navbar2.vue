<template>
    <header>
    <nav class="navbar navbar-light" >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img v-bind:src="require('../assets/logo_abajo.png')" alt="logo"  class="d-inline-block align-text-top"> 
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" >INICIO
                    </router-link> 
                </li>
                <li>
                    <router-link to="/Productos" class="nav-link" >PRODUCTOS
                    </router-link> 
                </li>
                <li class="nav-item">
                    <router-link to="/Contactenos" class="nav-link" >CONTACTENOS
                    </router-link> 
                </li>
                
            </ul>
        </div>
    </nav>
    </header>
    
</template>

<script>

export default {
    
  }
</script>

<style scoped>

header{
  position: relative;
  z-index: 99999;
  width: 100%;
  height: 100px;
  position: fixed;
  justify-content: flex-start;
  /*COLOR DEL NAVBAR*/
  background-color: #f2f2f2;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
</style>