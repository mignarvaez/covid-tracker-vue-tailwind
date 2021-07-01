<!-- El componente que tendrá el titulo por defecto, la fecha de los datos y demás -->
<template>
    <div class="text-center">
        <!-- Muestra la propiedad text que se le pase-->
        <h2 class="text-3xl font-bold">{{text}}</h2>
        <!-- La fecha de los datos -->
        <div class="text-2xl mt-4 mb-10">
            {{timestamp}}
        </div>
    </div>
</template>

<script>
import moment from 'moment';

//Se exporta el componente con sus configuraciones
export default {
    name: 'TituloDatos',
    props: ['text', 'dataDate'],
    //Se procesa con la libreria moment la fecha de los datos dandole un formato adeucado
    computed :{
        timestamp: function(){
            return moment(this.dataDate).format('MMMM Do YYYY, h:mm:ss a')
        }
    }
}
</script>