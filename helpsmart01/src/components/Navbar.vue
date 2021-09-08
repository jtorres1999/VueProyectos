<template>
    <header>
        <div class="navbar  ">
            <router-link to="/" class="navbar-brand">
                <img v-bind:src="require('../assets/logo_abajo.png')" alt="">
            </router-link>
            <div class="navbar-brand">
                <ul class="nav justify-content-end">
                  <li class="nav-item">
                    
                    <a class="nav-link" href="#">INICIO
                    </a>
                    
                  </li> 
                  <li class="nav-item ">
                    <a class="nav-link" href="">PRODUCTOS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="" >CONTACTENOS</a>
                  </li>
                  <li class="nav-item" >
                    <button type="button" class="btn btn-success" >DOWNLOAD</button>
                  </li>
            </ul>
            </div>

        </div>
    </header>
</template>

<script>
import Productos from './Productos.vue'
import Contactenos from './Contactenos.vue'
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  margin: -15px 15px;
}
.nav-item{
  margin: 0px 15px;
}
header {
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
.background-header {
  top: 0;
  position: fixed;
  background-color: #3DA029 !important;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

/*COLOR NAV LETRAS*/

.nav {
  
  outline: none;

  text-align-last: right;
  color: rgb(0, 0, 0);
  font-size: 20px;
  margin: 13px 24px;
  font-family: "Oswald";
}



.navbar .navbar-toggler-icon {
  background-image: none;
}

/**PRUEBA */

.background-header .navbar-nav .nav-link:hover,
.background-header .navbar-nav .active>.nav-link,
.background-header .navbar-nav .nav-link.active,
.background-header .navbar-nav .nav-link.show,
.background-header .navbar-nav .show>.nav-link {
	color: #000000!important;
}


.nav  a.nav-link {
	text-transform: capitalize;
	font-size: 22px;
	font-weight: 500;
	letter-spacing: 0.5px;
	color: rgb(0, 0, 0);
	transition: all 1.5s;
	margin-top: 10px;
  border: none;
}
/*lo que voy a utilizar*/
.nav .nav-link:hover,
.nav .active>.nav-link,
.nav .nav-link.active,
.nav .nav-link.show,
.nav .show>.nav-link {
	color: rgb(0, 0, 0);
	padding-bottom: 2px;
	border-bottom: 4px solid #0af729cc;
}
</style>
