<template>
<div class="Prueba">
    <h1>I AM JESUS TORRES</h1>
       
    {{msg}}

</div>    
</template>

<script>
export default{
    name: 'Jesus',
  data () {
    return {
      msg: 'Estoy iniciando en un proyecto con vue'
    }
  }, 
  created(){
      alert("ESTAS EMBALADO");
  },

}
</script>


<style>
.Prueba{
    background  color:  #ffffff;
}
</style>