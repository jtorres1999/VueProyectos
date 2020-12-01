<template>
    
</template>

<script>
export default {
    data(){
        return{
            usuarios:[],
            parametro:{
                numid:'',
                nombre:'',
                apellido:'',
                mail:''
            }
        }
    },
    created(){

        this.mostrar();
    },
    methods:{
        const respuesta=this.mostrar
        this.parametro.numid=100;
        const response=await axios.get("http://localhost/apibd/api/api.php?op=2&numid="+this.parametro.numid)
    }
}
</script>
<style>

</style>