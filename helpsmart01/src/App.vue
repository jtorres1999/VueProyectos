<template>
  <navbar />
  <inicio />
  <productos />
  <contactenos />
  <router-view/>
  
</template>

<script>
import Navbar from './components/Navbar.vue'
import Inicio from './components/Inicio.vue'
import Productos from './components/Productos.vue'
import Contactenos from './components/Contactenos.vue'

export default{
  components: {
    Navbar,
    Inicio,
    Productos,
    Contactenos,
    
  }
}
    
  
</script>

<style>
.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
}
.float:hover {
	text-decoration: none;
	color: #25d366;
  background-color:rgb(119, 118, 221);
}

.my-float{
	margin-top:16px;
}
</style>
