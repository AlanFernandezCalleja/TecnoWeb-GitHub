<template>
  <nav>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/formacion">Formación</router-link></li>
      <li><router-link to="/investigacion">Investigación</router-link></li>
      <li><router-link to="/campus">Campus</router-link></li>
      <li><router-link to="/vida-universitaria">Vida Universitaria</router-link></li>
      <li><router-link to="/noticias">Noticias</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>
/* Estilos de la barra de navegación */
</style>
