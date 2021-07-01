<template>
  <!-- Se usa un condicional para renderizar solamente si la app ya finalizo de cargar los datos -->
  <main v-if="!loading">
    <!-- El componente TituloDatos con sus propiedades-->
    <TituloDatos :text="title" :dataDate="dataDate"/>
    
    <!-- El componente CajasDatos con sus propiedades-->
    <CajasDatos :stats="stats"/>

    <!-- El componente SeleccionPais con sus propiedades-->
    <SeleccionPais @get-pais="getCountryData" :paises="paises"/>

    <!-- Botón que limpia la selección de un pais, se muestra solo si esta seleccionado un país-->
    <button @click="limpiarSeleccion" v-if="stats.Country" class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600">
      Limpiar Selección
    </button>
  </main>

  <!-- En caso contrario se muestra una renderizado estilizado con tailwindcss que indica que se estan recuperando los datos-->
  <main class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Cargando los datos
    </div>
    <!-- Con :src se hace un binding a la imagen cargada en la función data del componente-->
    <img :src="loadingImage" class="w-24 m-auto" alt="">
  </main>
</template>

<script>
//Se importan los componentes
import TituloDatos from '@/components/TituloDatos'
import CajasDatos from '@/components/CajasDatos'
import SeleccionPais from '@/components/SeleccionPais'

export default {
  name: 'Home',
  components: {
    //Se registran los componentes
    TituloDatos,
    CajasDatos,
    SeleccionPais
    
  },
  //Función encargada de asociar los datos traidos de la API al estado de la aplicación con vue
  data(){
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {},
      paises: [],
      loadingImage: require('../assets/hourglass.gif')
    }
  },
  //Configuración para obtener la información de la API
  methods:{
    //Función asincrona para obtener la información de la API
    async fetchCovidData() {
      const res = await fetch('https://api.covid19api.com/summary');
      //Se convierte a json la información recibida y se retorna
      const data = await res.json();
      return data;
    },
      //Funcion que retorna la información según el pais seleccionado
    getCountryData(country){
      this.stats = country;
      this.title = country.Country;
    },

    //Como se vuelve a hacer una petición por la información global, esta función es asincrona
    async limpiarSeleccion(){
      this.loading = true
      const data = await this.fetchCovidData()
      this.title = 'Global'
      this.stats = data.Global
      this.loading = false
    }

  },

  //En created se indica lo que debe hacerse al iniciar la app
  async created(){
    //Se llama a la función fetchCovidData para obtener los datos
    const data = await this.fetchCovidData();
    
    //Se asignan los datos recuperados de la API 
    this.dataDate = data.Date;
    this.stats = data.Global;
    this.paises = data.Countries;
    //Luego de asignarse los datos, la app ya no está en estado "Cargando"
    this.loading = false;
  },
}
</script>
