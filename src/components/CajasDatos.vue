<!-- Componente donde se visualizaran los datos sobre el covid estilizado con clases de tailwindcss-->
<template>
    <div class="grid md:grid-cols-2 gap-4">
        
        <!-- Box 1 -->
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">
                Casos
            </h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">Nuevos:</span>
                {{ numberWithCommas(stats.NewConfirmed) }}
            </div>

            <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                {{ numberWithCommas(stats.TotalConfirmed) }}
            </div>            
        </div>

        <!-- Box 2 -->
        <div class="shadow-md bg-blue-200 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">
                Muertes
            </h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">Nuevos:</span>
                {{ numberWithCommas(stats.NewDeaths) }}
            </div>

            <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                {{ numberWithCommas(stats.TotalDeaths) }}
            </div>            
        </div>
    </div>
</template>

<script>
//Se exporta el componente con sus propiedades
export default {
    name: 'CajasDatos',
    props: ['stats'],
    methods:{
        numberWithCommas(x){ //Retorna los números formateados con comas usando una expresión regular
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        
    }
}
</script>