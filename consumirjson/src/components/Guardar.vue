<template>
      <div class="container">
        <br>
        <br>
    <div class="jumbotron">

        <center><h3>Guardar Usuario</h3></center>
         <div class="alert alert-warning alert-dismissible fade show" v-show="mostrarError">
             <button type="button" class="close" @click="limpiarError()">&times;</button>
             <strong>Mensaje</strong> 
             <p v-for="error of errors" v-bind:key="error">{{error}}</p>
        </div>
     
        <label>Numero ID</label>
        <input type="text" class="form-control" v-model="usuario.numid" @click="limpiarError()">
         <label>Nombre</label>
        <input type="text" class="form-control" v-model="usuario.nombre" @click="limpiarError()">
        <label>Apellido</label>
        <input type="text" class="form-control" v-model="usuario.apellido" @click="limpiarError()">
        <label>Mail</label>
        <input type="text" class="form-control" v-model="usuario.mail" @click="limpiarError()">
        <br>
        <center><button class="btn btn-primary" @click="nuevo()" >Guardar</button></center>

    </div>    

    </div>     
</template>
<script>
export default {

    data(){
        return{
            usuario:{
                numid:'',
                nombre:'',
                apellido:'',
                mail:''
            },
            errors:[],
            mostrarError:false
        }
    },
    methods:{

        nuevo(){

            if(this.usuario.numid===''){
                this.errors.push('Campo Numid Vacio!!');
                this.mostrarError=true;
            } 
            if(this.usuario.nombre===''){
                this.errors.push('Campo Nombre Vacio!!');
                this.mostrarError=true;
            } 
            if(this.usuario.apellido===''){
                this.errors.push('Campo Apellido Vacio!!');
                this.mostrarError=true;
            } 
            if(this.usuario.mail===''){
                this.errors.push('Campo Correo Vacio!!');
                this.mostrarError=true;
            }   
            if(this.errors.length==0){

                const respuesta=this.nuevoUsuario();
                respuesta.then((data)=>{
                    alert(data.mensaje);   
                });
                this.limpiar();
            }
        },

         async nuevoUsuario(){
             try{
                 
                 const response=await axios.post("http://localhost/apibd/api/api.php",this.usuario);
                 const data=response.data;
                 return data;
             }
             catch(error){
                 console.log(error);
             }
         }, // nuevo usuario

         limpiarError(){
             this.errors=[];
             this.mostrarError=false;
         },
         limpiar(){
             this.usuario.numid='';
             this.usuario.nombre='';
             this.usuario.apellido='';
             this.usuario.mail='';
         }





    }
    
}
</script>