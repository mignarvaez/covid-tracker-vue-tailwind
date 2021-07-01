<!-- Componente de selección de país con estilos de tailwindcss-->
<template>
    <select @change="onChange()" v-model="selected" class="form-select mt-10 block w-full border p-3 rounded">
        <option value="0">Selecciona un país: </option>
        <!-- Se usa la directiva v-for para recorrer el arreglo de paises-->
        <option v-for="pais in paises" :key="pais.ID" :value="pais.ID">
            {{ pais.Country }}
        </option>
    </select>
</template>

<script>
export default {
    name:'SeleccionPais',
    props: ['paises'],
    data () { //Asociado al elemento correspondiente al país seleccionado
        return {
            selected: 0
        }
    },
    methods: { 
        onChange() { //Método que se encarga de cargar los datos de covid según el país seleccionado
            //Busca el pais que tiene por id el id seleccionado y lo emite para usarse en el home
            const pais = this.paises.find((item) => item.ID == this.selected)
            this.$emit('get-pais', pais)
        }
    }

}
</script>