<template>
  <section class="prod" id="sec-bea5">
    <div class="contenedor">
      <video src="../assets/GIF_2.mp4" class="video" autoplay></video>
      <br><br><br><br><br><br><br>
      <img :src="require('../assets/area_2_0.png')" alt="" class="ubicacion"/>
      <img :src="require('../assets/area_3_01.png')" alt="" class="ubicacion"/>
    </div>
    <div class="caja">
      <div class="texto1">Sensor de Temperatura Y Humedad</div>
      <br>
      <div class="texto2">
        Dolor sit amet, consecteur elit, sed do elusmod lelelero Frankie de Jong
      </div>
      <br><br>
      <router-link to="/Producto1">
        <button class="btn btn-success btn-lg">Detalles</button>
      </router-link>
    </div>
    <div class="cajatwo">
      <div class="texto1">Sensor de Temperatura </div>
      <br>
      <div class="texto2">
        Dolor sit amet, consecteur elit, sed do elusmod lelelero Luis Diaz
      </div>
      <br><br>
      <router-link to="/Producto2">
        <button class="btn btn-success btn-lg">Detalles</button>
      </router-link>
    </div>
     <div class="cajathree">
      <div class="texto1">Multisensor para Planta Electrica </div>
      <br>
      <div class="texto2">
        Dolor sit amet, consecteur elit, sed do elusmod lelelero leonel messi
      </div>
      <br><br>
      <router-link to="/Producto3">
        <button class="btn btn-success btn-lg">Detalles</button>
      </router-link>
    </div>
  </section>
  
</template>

<script>

export default {};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
.ubicacion{
  width: 100%;
  height: 80%;
}
hr{
  border: 2px solid green;
}
.contenedor{
  position: relative;
}
.video{
  width: 2290px;
  height: 600px;
  border: none;
}
.caja{
  position: absolute;
  top: 1950px;
  left: 69px;
  width: 400px;
  height: 800px;
  font-family: "Montserrat", sans-serif;
}
.texto1{
  font-size: 1.95vw;
  font-weight: semi-bolder;
}
.texto2{
  font-size: 1vw;
}
.caja btn{
  left: 200px;

}
.cajatwo{
  position: absolute;
  top: 2550px;
  left: 69px;
  width: 400px;
  height: 800px;
  font-family: "Montserrat", sans-serif;
}
.cajathree{
  position: absolute;
  top: 3100px;
  left: 69px;
  width: 400px;
  height: 800px;
  font-family: "Montserrat", sans-serif;
}
</style>