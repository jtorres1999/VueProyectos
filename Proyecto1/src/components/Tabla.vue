<template>
    
    <div class="container">
        <center><h1>ARRAYS DE EMPLEADOS DESTACADOS</h1></center>
    
        <table class="table table-striped" border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>APELLIDO</th>
                    <th>EDAD</th>
                    <th>PROFESION</th>
                    <th>EMPRESA</th>  
                </tr>
            </thead>
            <tbody >
                <tr v-for="empleado of empleados" v-bind:key="empleado.id">
                <td>{{empleado.id}}</td>
                <td>{{empleado.nombre}}</td>
                <td>{{empleado.apellido}}</td>
                <td>{{empleado.edad}}</td>
                <td>{{empleado.profesion}}</td>
                <td>{{empleado.empresa}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            //Esto es un array 
            empleados:[
            {
                id:1,
                nombre:'Jesus',
                apellido:' Torres',
                edad:'21',
                profesion:' Ing. de Sistemas ',
                empresa: ' Sin trabajo ',
                

            },//objeto empleado 1
            {
                id:2,
                nombre:' Shirley',
                 apellido:' Hernandez',
                edad:'21',
                profesion:'Gastronomia ',
                empresa: 'Niñera',
            },//Objeto 2
            {
                id:3,
                nombre:'Carlos',
                 apellido:' Velez',
                edad:'23',
                profesion:' Tecnico en redes ',
                empresa: 'Movistar',
            },
            ]
        }
    }
}
</script>>