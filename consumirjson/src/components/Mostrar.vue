<template>
    <div class="container">
      

      
     <div v-show="mostrartabla">   
        <br>
        <center><h3>Lista de Usuarios</h3></center>
        <br>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalnuevo">
            Nuevo Usuario
        </button>  
        <br>
        <br>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Numero ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Mail</th>
                    <th>Accion</th>
                </tr>    
            </thead>    
            <tbody>
                <tr v-for="usuario of usuarios" v-bind:key="usuario.numid">
                    <td v-text="usuario.numid"></td>
                    <td v-text="usuario.nombre"></td>
                    <td v-text="usuario.apellido"></td>
                    <td v-text="usuario.mail"></td>
                    <td>
                        
                        <button class="btn btn-warning" @click="enviar(usuario)">Editar</button>
                        <button class="btn btn-danger" @click="eliminarUsuario(usuario.numid)">Eliminar</button>
                    
                    </td>
                </tr>    

            </tbody>    

        </table>   

     </div> 
    
    <ver v-show="mostrarform" ></ver>
    <button class="btn btn-primary" v-show="mostrarform" @click="atras()">Atras</button>
    



    <!-- The Modal -->
<div class="modal" id="modalnuevo">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Ventana Nuevo Usuario</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
         <guardar/> 
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar Ventana</button>
      </div>

    </div>
  </div>
</div>

    
    </div>   

 
     

</template>
<script>
import bus from '../Bus.js'
import ver from '@/components/Ver'
import guardar from '@/components/Guardar'

export default {
    components:{
        ver,
        guardar
    },

    data(){
        return{
            usuarios:[],
            mostrartabla:true,
            mostrarform:false
        }
    },

    mounted(){
        this.mostrar();
    },
    updated(){
        this.mostrar();
    },
    
    methods: {


        enviar(usuario){
            bus.$emit("usuario",usuario);
            this.mostrartabla=false;
            this.mostrarform=true;
        },

        atras(){
            this.mostrartabla=true;
            this.mostrarform=false;
        },

         mostrar(){
            const respuesta=this.mostrarUsuarios();
            respuesta.then((data)=>{
            this.usuarios=data.data;                          
        });
        },// terminar el metodo mostrar

          async mostrarUsuarios(){
            try{
              const response=await axios.get("http://localhost/apibd/api/api.php?op=1");
              const data=response.data;  
              return data;
            } 
            catch(error){
                console.log(error);

            }

        },// termina el mostrarUsuarios

         async eliminarUsuario(numeroid){
            
             try{
               
                 const response=await axios.delete("http://localhost/apibd/api/api.php",{data:{numid:numeroid}});
                 const data=response.data;
                 this.mostrar();
             }
             catch(error){
                 console.log(error)
             }

         }// eliminar usuario
        
    },


}
</script>
<style>
table{
    text-align: center;
}

</style>


</style>