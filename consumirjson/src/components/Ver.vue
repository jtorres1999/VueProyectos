<template>
    <div class="container">
        <br>
        <br>
    <div class="jumbotron">

        <center><h1>Editar Usuario</h1></center>
        <div class="alert alert-warning alert-dismissible fade show" v-show="mostrarError">
             <button type="button" class="close" @click="limpiarError()">&times;</button>
             <strong>Mensaje</strong> 
             <p v-for="error of errors" v-bind:key="error">{{error}}</p>
        </div>
        <label>Numero ID</label>
        <input type="text" class="form-control" v-model="usuario.numid" readonly>
         <label>Nombre</label>
        <input type="text" class="form-control" v-model="usuario.nombre">
        <label>Apellido</label>
        <input type="text" class="form-control" v-model="usuario.apellido">
        <label>Mail</label>
        <input type="text" class="form-control" v-model="usuario.mail">
        <br>
        <center><button class="btn btn-primary" @click="actualizar()">Editar</button></center>

    </div>    

    </div>

     

</template>
<script>
import bus from '../Bus.js'
export default {

    data(){
        return{
            usuario:'',
            errors:[],
            mostrarError:false
        }
    },
    created(){
        this.recibir();
    },
    methods: {

        recibir(){

            bus.$on("usuario",(usuario)=>{this.usuario=usuario});

        },
         actualizar(){
             if(!this.usuario.nombre){
                 this.errors.push('Campo Nombre Vacio!!');
                 this.mostrarError=true;
             }
             if(!this.usuario.apellido){
                 this.errors.push('Campo Apellido Vacio!!');
                 this.mostrarError=true;
             }
             if(!this.usuario.mail){
                 this.errors.push('Campo Correo Vacio!!');
                this.mostrarError=true;
             }
             if(this.errors.length==0){
                 const respuesta=this.actualizarUsuario();
                respuesta.then((data)=>{
                alert(data.mensaje);   
                 })
             }   


            
        },
        limpiarError(){
            this.errors=[];
            this.mostrarError=false;
        },

         async actualizarUsuario(){
             try{
            
                 const response=await axios.put("http://localhost/apibd/api/api.php",this.usuario);
                 const data=response.data;
                 return data;
             }
             catch(error){
                 console.log(error);
             }
         }, // actualizar usuario

    }
    
}
</script>