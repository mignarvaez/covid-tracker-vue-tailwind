<template>
   <!-- Se usa el componente encabezado -->
   <Encabezado />
   <!-- Se agrega un div con un class container con estilos que vienen de Tailwindcss-->
   <div class="container">
     <router-view />
   </div>
</template>
<script>
import Encabezado from '@/components/Encabezado'

export default {
  components:{
    Encabezado
  }
}
</script>
