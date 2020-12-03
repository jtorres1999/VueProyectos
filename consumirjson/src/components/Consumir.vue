<template>
    
</template>
<script>
export default {
    // estado cuando el componente se crea o inicializa hace algo

    data(){
        return{
            usuarios:[],
            parametro:{
                numid:'',
                nombre:'',
                apellido:'',
                mail:''
            },
            
        }
    },

    created(){

        this.eliminar();

    },
    methods: {

        mostrar(){
            const respuesta=this.mostrarUsuarios();
            respuesta.then((data)=>{
            this.usuarios=data.data;
            let tam=data.tam;
            for(let i=0;i<tam;i++){
                console.log("Numid "+this.usuarios[i].numid);
                console.log("Nombre "+this.usuarios[i].nombre);
                console.log("Apellido "+this.usuarios[i].apellido);
                console.log("Mail "+this.usuarios[i].mail);
                
            }
                
                });
        },// terminar el metodo mostrar

        mostrarId(){
            const respuesta=this.mostrarUsuarioId();
            respuesta.then((data)=>{
                 this.usuarios=data.data;
                console.log("Numid "+this.usuarios[0].numid);
                console.log("Nombre "+this.usuarios[0].nombre);
                console.log("Apellido "+this.usuarios[0].apellido);
                console.log("Mail "+this.usuarios[0].mail);
                 
            });

        },

        nuevo(){
            const respuesta=this.nuevoUsuario();
            respuesta.then((data)=>{
                 console.log(data.mensaje);   
            })
        },
        actualizar(){
            const respuesta=this.actualizarUsuario();
            respuesta.then((data)=>{
                 console.log(data.mensaje);   
            })
        },

        eliminar(){
            const respuesta=this.eliminarUsuario();
            respuesta.then((data)=>{
                  console.log(data.mensaje); 
            })
        },
        

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

           async mostrarUsuarioId(){
            try{
              this.parametro.numid=100;  
              const response=await axios.get("http://localhost/apibd/api/api.php?op=2&numid="+this.parametro.numid);
              const data=response.data;  
              return data;
            } 
            catch(error){
                console.log(error);

            }

        },// termina el mostrarUsuarios

         async nuevoUsuario(){
             try{
                 this.parametro.numid='986520';
                 this.parametro.nombre="manuel";
                 this.parametro.apellido="perez";
                 this.parametro.mail="mperez@hotmail.com";
                 const response=await axios.post("http://localhost/apibd/api/api.php",this.parametro);
                 const data=response.data;
                 return data;
             }
             catch(error){
                 console.log(error);
             }
         }, // nuevo usuario

         async actualizarUsuario(){
             try{
                 this.parametro.numid='986520';
                 this.parametro.nombre="manuel1";
                 this.parametro.apellido="perez1";
                 this.parametro.mail="mperez1@hotmail.com";
                 const response=await axios.put("http://localhost/apibd/api/api.php",this.parametro);
                 const data=response.data;
                 return data;
             }
             catch(error){
                 console.log(error);
             }
         }, // actualizar usuario

         async eliminarUsuario(){

             try{
                 this.parametro.numid='986520';
                 const response=await axios.delete("http://localhost/apibd/api/api.php",{data:{numid:this.parametro.numid}});
                 const data=response.data;
                 return data;
             }
             catch(error){
                 console.log(error)
             }

         }// eliminar usuario
        



    }


}



</script>