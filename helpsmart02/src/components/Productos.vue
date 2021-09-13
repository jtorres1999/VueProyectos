<template>
  <section class="prod" id="sec-bea5">
    
    <div class="contenedor">
      <br><br>
      <img :src="require('../assets/Diseño_01.png')" alt="" class="cent2"/>
          <div class="wrapper">
            <div class="mover">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="card border-primary">
                        <div class="card-body">
                            <img :src="require('../assets/card1.png')" alt="" class="card-img-top"/>
                            <h5 class="card-title">Sensor de Temperatura y Humedad </h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <br>
                            <router-link to="/Sensor-de-temperatura-y-humedad" >
                                <button type="button" class="btn-flotante">VER MAS</button>
                            </router-link>
                        </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card border-primary">
                        <div class="card-body">
                            <img :src="require('../assets/card2.png')" alt="" class="card-img-top"/>
                            <h5 class="card-title">Sensor de Humedad</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <br>
                            <router-link to="/Sensor-de-temperatura" >
                                <button type="button" class="btn-flotante">VER MAS</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card border-primary">
                        <div class="card-body">
                            <img :src="require('../assets/card3.png')" alt="" class="card-img-top"/>
                            <h5 class="card-title">Multisensor para Planta Electrica</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                             <br>
                            <router-link to="/Multisensor-para-planta-electrica" >
                                <button type="button" class="btn-flotante">VER MAS</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="card">
              <img :src="require('../assets/card1.png')" alt="" />
              <div class="info">
                <h1>Sensor de Temperatura y Humedad</h1>
                <p>Modelo: HM-TH-B</p>
                <button>Detalles</button>
              </div>
            </div>
            <div class="card">
              <img :src="require('../assets/card2.png')" alt="" />
              <div class="info">
                <h1>Sensor de Temperatura y Humedad</h1>
                <p>Modelo: HM-TH-B</p>
                <button>Detalles</button>
              </div>
            </div>
            <div class="card">
              <img :src="require('../assets/card3.png')" alt="" />
              <div class="info">
                <h1>Sensor de Temperatura y Humedad</h1>
                <p>Modelo: HM-TH-B</p>
                <button>Detalles</button>
              </div>
            </div>
          </div>
    </div>
    
  </section>
  
</template>

<script>

export default {};
</script>

<style  scoped>

@import url(https://fonts.googleapis.com/css?family=Montserrat);
.cent2{
    width: 100%;
    height: 60%;
}
.ubicacion{
  width: 100%;
  height: 80%;
}
#myVideo {
 
  right: 0;
  bottom: 0;
  min-width: 50%;
  min-height: 50%;
  max-width: 100%;
  max-height: 90%;
}
hr{
  border: 2px solid green;
}
.contenedor{
  position: relative;
}
/**



.mover{
    position: relative;
    margin: 10px 12px;
    
}


.card-text{
    color: black;
    font-family: "Montserrat", sans-serif;
    font-weight: semibolder;
}
.card-title{
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
    color: black;
}
.btn-flotante {
	font-size: 16px; /* Cambiar el tamaño de la tipografia 
	text-transform: uppercase; /* Texto en mayusculas 
	font-weight: bold; /* Fuente en negrita o bold 
	color: #ffffff; /* Color del texto 
	border-radius: 5px; /* Borde del boton 
	letter-spacing: 2px; /* Espacio entre letras 
	background-color: #3DA029; /* Color de fondo 
	padding: 18px 80px; /* Relleno del boton 
	
	bottom: 40px;
	
	transition: all 2100ms ease 0ms;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	z-index: 999;
}
.btn-flotante:hover {
	background-color: #2c2fa5; /* Color de fondo al pasar el cursor 
	box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
	transform: translateY(-7px);
}
@media only screen and (max-width: 600px) {
 	.btn-flotante {
		font-size: 14px;
		padding: 12px 20px;
		bottom: 20px;
		right: 20px;
	}
}  */
/**EJEMPLO */
.wrapper{
	display: flex;
	width: 90%;
	justify-content: space-around;
}
.card:hover{
		transform: translateY(10px);
    opacity: 1;
    .info{
			opacity: 1;
			transform: translateY(0px)
    }
  }
.card{
	width: 280px;
	height: 360px;
	border-radius: 15px;
	padding: 1.5rem;
	background: white;
	position: relative;
	display: flex;
	align-items: flex-end;
	transition: 0.4s ease-out;
	box-shadow: 0px 7px 10px rgba(black, 0.5);
}	
	
  .card:before{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 15px;
		background: rgba(black, 0.6);
		z-index: 2;
		transition: 0.5s;
		opacity: 0;}
	img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 15px;
  }
	.info{
		position: relative;
		z-index: 3;
		color: white;
		opacity: 0;
		transform: translateY(30px);
		transition: 0.5s;}
		h1{
			margin: 0px;
      }
		p{
			letter-spacing: 1px;
			font-size: 15px;
			margin-top: 8px;}
		button{
			padding: 0.6rem;
			outline: none;
			border: none;
			border-radius: 3px;
			background: white;
			color: black;
			font-weight: bold;
			cursor: pointer;
			transition: 0.4s ease;
    }
  

</style>