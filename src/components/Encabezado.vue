<!-- Componente que representa el encabezado de la aplicación. Se estiliza con clases de tailwindcss -->
<template>
<!-- Entre los estilos destaca el fondo azul, texto blanco, el padding, el tamaño del texto y el soporte para mobiles(md:Text) -->
  <header class="text-center bg-blue-900 text-white p-4 mb-10">
    <div class="text-3xl md:text-5xl font-bold mb-3">
      <i class="fa fa-viruses"></i>
      Monitoreo Covid-19
    </div>
    <p>API de <a class="text-blue-300" href="https://covid19api.com" target="_blank">covid19api.com</a></p>
  </header>
</template>

<script>
export default {
  name: 'Encabezado'
}
</script>
