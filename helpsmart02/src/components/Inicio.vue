<template>
<br><br>
    <header>
        <div class="contenedor">
            <img :src="require('../assets/Help_Smart-01.png')" alt="" class="centrar1"/>
            <img :src="require('../assets/Diseño_01.png')" alt="" class="cent2"/>
            <div class="src">
                <a href="https://www.helpmedica.com" id="sli">
                    <img :src="require('../assets/Boton_descargar.png')" alt="" >
                </a>
            </div>
          <div class="videos">
            <video autoplay muted loop id="myVideo">
                <source src="../assets/Producto1.mp4" type="video/mp4" class="embed-responsive-item">
            </video>
            <video autoplay muted loop id="myVideo">
                <source src="../assets/Gif2.mp4" type="video/mp4" class="embed-responsive-item">
            </video>
            <video autoplay muted loop id="myVideo">
                <source src="../assets/Plantaelectrica2.mp4" type="video/mp4" class="embed-responsive-item">
            </video>
          </div>
        </div>
        <div class="caja">
          <div class="texto1">Sensor de Temperatura Y Humedad</div>
          <br>
          <div class="texto">
            Modelo: HM-TH-B
          </div>
          <br>
          <div class="text">
            <ul >
              <li class="text">Monitoreo de temperatura y humedad en tiempo real.</li>
              <li class="text">Configuración fácil en menos de 3 minutos</li>
              <li class="text">Personalizaciones del dispositivo</li>
            </ul>
          </div>
           <br>
          <router-link to="/Sensor-de-temperatura-y-humedad">
            <button class="btn btn-success btn-lg">Detalles</button>
          </router-link>
      
     
    </div>
    <div class="cajatwo">
      <div class="texto1">Sensor de Temperatura </div>
      <br>
      <div class="texto">
        Modelo: HM-T-2IND-B
      </div>
      <br>
      <div class="texto2">
        <ul >
          <li class="text">Monitoreo de temperatura en tiempo real.</li>
          <li class="text">Personalizaciones del dispositivo. </li>
          <li class="text">Personalizaciones del dispositivo. </li>
          <li class="text">Detección de apertura y corte de energía</li>
        </ul>  
        	
      </div>
      <br>-->
      <router-link to="/Sensor-de-temperatura">
        <button class="btn btn-success btn-lg">Detalles</button>
      </router-link>
      
    </div>
     <div class="cajathree">
      <div class="texto1">Multisensor para Planta Electrica </div>
      <br>
      <div class="texto">Modelo: HMPE-T-2IND-B</div>
      <div class="texto2">
        <br>
          <ul class="color">
           <li class="text">Monitoreo del estado de la planta eléctrica y la red eléctrica externa.</li>
            <ul >
              <li class="text">Encendido y apagado</li>
              <li class="text">Temperatura del área.</li>
              <li class="text">Monitoreo del estado de las fases</li>
            </ul>  
            <li class="text">Configuración fácil en menos de 3 minutos</li>
            <li class="text">Personalizaciones del dispositivo</li>
          </ul>
      </div>
      
      <router-link to="/Multisensor-para-planta-electrica">
        <button class="btn btn-success btn-lg">Detalles</button>
      </router-link> 
    </div>
       
        <hr />
    </header>
</template>
<script>

export default {
    
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
.contenedor{
    position:  relative;
}
.btn{
    align-items: center;
    font-weight: 1000px;
}
hr {
  border: 2px solid green;
}
.src img{
    position: absolute;
    top: 1580px;
    left: 84px;
    width: 410px;
    height: 200px;
}
.videos{
  width: 10%;
}
/** */
.centrar1{
    width: 100%;
    height: 80%;
    margin: 40px 0px;
}
.cent2{
    width: 100%;
    height: 60%;
}
.contenedor{
    position: relative;
}

.caja{
  position: absolute;
  top:  1950px ;
  left: 49px;
  width: 600px;
  height: 800px;
  font-family: "Montserrat", sans-serif;
}
.texto{
  font-size: 1.55vw;
  font-weight: semibolder;
  font-family: "Montserrat", sans-serif;
  color: #000;
}
.texto1{
  font-size: 1.95vw;
  font-weight: bolder;
  font-family: "Montserrat", sans-serif;
   color: #000;
}
.text{
  font-size: 1.3vw;
  font-weight: semibolder;
  font-family: "Montserrat", sans-serif;
  color: #000;
}
.texto2 ul{
  font-family: "Montserrat", sans-serif;
  color: #000;
}
ul {
list-style: none;
padding: 5px;
margin-left: 10px;
}

ul li::before {
content: "\2022";  
color: rgb(0, 255, 136); 
display: inline-block; 
padding-right: 5px;
font-size: 35px;
line-height: 13px;
vertical-align: -6px;
font-family: "Montserrat", sans-serif;
}

.btn{
  margin: 0px 180px;;
}
.cajatwo{
  position: absolute;
  top: 2600px ;
  left: 69px ;
  width: 550px;
  height: 800px;
  font-family: "Montserrat", sans-serif;
  
}
.cajathree{
  position: absolute;
  top: 3250px ;
  left: 69px ;
  width: 600px;
  height: 800px;
  font-family: "Montserrat", sans-serif;
}
.lista{
  list-style: inside;
  list-style: square;
  line-height:180%;
  color: #000;
  font-size: 1.2vw;
  font-family: "Montserrat", sans-serif;
  opacity: 1;
}

</style>