<template>
<div>  

    <input type="text" v-model="nombre">
    <h1>{{nombre}}</h1>

</div>  

</template>

<script>
export default{

    data(){
        return{
            nombre:''
        }
    }
}

</script>

<style>
</style>