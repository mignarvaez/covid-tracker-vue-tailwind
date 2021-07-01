//En este archivo se pueden agregar estilos por defecto a los distintos elementos de tailwindcss
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container:{ // Valores por defecto para la clase container
      center: true,
      padding: '2rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
