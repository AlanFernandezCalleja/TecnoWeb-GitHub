
<style>
.navbar{
  margin: 2.2vh;
  border-radius: 20px;

}
.fondo-sitio{
  background: black;
  background-size: cover;
  height: 100%;
  width: 100%;
}
</style>


<script>
    export default {

    }
</script>

<template>
    
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div class="container-fluid">
          <a class="navbar-brand fs-1 fw-bold"  href="#">UCB</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link class="nav-link fs-5" to="/"> Inicio </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link fs-5" to="/Campus"> Campus </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link fs-5" to="/Formacion"> Formacion </router-link>
              </li>
              <li class="nav-item" >
                <router-link class="nav-link fs-5" to="/Investigacion"> Investigacion </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link fs-5" to="/Noticias"> Noticias </router-link>
              </li>
            </ul>
            <button type="button" class="btn fs-5 btn-success bg-succes mx-2">Login</button>
            <button type="button" class="btn fs-5 btn-success bg-dark mx-2">Register</button>
            
          </div>
        </div>
      </nav><br>
       
        <section class="fondo-sitio"></section>

        <router-view> </router-view>
    </div>
</template>
