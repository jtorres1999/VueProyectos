<template>
<div>
    <h1>Titulo</h1>
<input type="text " v-model="Comentario" v-on:keyup.enter="adicionarComentario()" >
    
    </div>
</template>>

<script>
import eventBus from   '../../Bus.js'
export default {
    data(){
        return{
            Comentario:''
        }
    },
    methods:{
        adicionarComentario(){
            eventBus.$emit("Comentario", this.Comentario);
            this.Comentario="";
        }
    }    
}
</script>

<style>

</style>