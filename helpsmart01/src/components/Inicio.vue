<template>
<br><br>
    <header>
        
        <div class="contenedor">
            <img :src="require('../assets/Help_Smart-01.png')" alt="" class="centrar1"/>
            <img :src="require('../assets/Diseño_01.png')" alt="" class="cent2"/>
            <div class="src">
                <a href="ww.helpmedica.com">
                    <img :src="require('../assets/Boton_descargar.png')" alt="" >
                </a>
            </div>

        </div>
        <a href="https://api.whatsapp.com/send?phone=3218818961&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20." class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
        </a>
       
        <hr />
    </header>
</template>
<script>

export default {
    
};
</script>

<style scoped>
hr {
  border: 2px solid green;
}
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
    position: relativa;
}
.src img{
    position: absolute;
    top: 1400px;
    left: 14px;
    width: 510px;
    height: 300px;
}
</style>