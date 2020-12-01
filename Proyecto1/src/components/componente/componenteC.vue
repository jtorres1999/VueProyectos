<template>
    <div>
        <h1>Descripción</h1>
        <ul>
            <li v-for="Comentario of Comentarios" v-bind:key="Comentario">{{Comentario}}</li>

        </ul>
    </div>
</template>
<script>
import eventBus from '../../Bus.js'
export default {
   data(){
       return{
           Comentarios:[]
       }
   },
   
   created(){
       eventBus.$on("Comentario",(Comentario)=>{this.Comentarios.push(Comentario)})
   }

}
</script>
<style>

</style>