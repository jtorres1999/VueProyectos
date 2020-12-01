<template>
    <div>{{Comentario}}</div>
</template>
<script>
import eventBus from   '../../Bus.js'

export default {
    
    data(){
        return {
            Comentario:""
        }
        
    },

//Cuando se crea el componenete
created(){
    eventBus.$on("Comentario",(Comentario)=>{this.Comentario = Comentario})
}
}
</script>
<style>

</style>