<template>
    <header>
        <div class="navbar  ">
            <router-link to="/" class="navbar-brand">
                <img v-bind:src="require('../assets/logo_abajo.png')" alt="logo" >
            </router-link>
            <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler collapsed">
            <span class="navbar-toggler-icon"></span>
            </button>
         
            <div class="navbar-brand">
                <ul class="nav  me-auto  justify-content-end">
                  <li class="nav-item ">
                    <router-link to="/" class="nav-link" >INICIO
                    </router-link> 
                  </li> 
                  <li class="nav-item ">
                     <router-link to="/Productos" class="nav-link" >PRODUCTOS
                    </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link to="/Contactenos" class="nav-link" >CONTACTENOS
                    </router-link> 
                  </li>
                  <li class="nav-item" >
                    <button type="button" class="boton3" >DOWNLOAD</button>
                  </li>
            </ul>
            </div>

        </div>
    </header>
</template>

<script>

export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
.navbar{
  margin: -15px 15px;
}
/**RESPONSIVE */
.navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: box-shadow .15s ease-in-out;
}

[type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
}
button, select {
    text-transform: none;
}
navbar .navbar-toggler {
    color: rgba(255,255,255,.55);
    border-color: rgba(255,255,255,.1);
}
/** */
.navbar-brand img{
  width: 200px;
  height: 67px;
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

/*BOTONES*/
.boton3 {
  color: #000000 !important;
  font-size: 20px;
  font-weight: 550;
  padding: 1em 1.2em;
  background: rgba(0,0,0,0);
  border: none;
  border-color: #6ab23c;
  transition: all 1.5s ease;
  position: relative;
  outline: none;
}
.boton3:hover {
  background: #6ab23c;
  color: rgb(0, 0, 0) !important;
}

.nav {
  outline: none;
  text-align-last: right;
  color: rgb(0, 0, 0);
  font-size: 20px;
  margin: 13px 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
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
