

// import Vue from 'vue';
// import App from './App.vue';
// import VueRouter from 'vue-router';

// Vue.use(VueRouter);

// import Inicio from '.src/components/Inicio.vue';
// import Formacion from './components/Formacion.vue';
// import Investigacion from './components/Investigacion.vue';
// import Campus from './components/Campus.vue';
// import VidaUniversitaria from './components/VidaUniversitaria.vue';
// import Noticias from './components/Noticias.vue';

// const routes = [
//   { path: '/Inicio', component: Inicio },
//   { path: '/formacion', component: Formacion },
//   { path: '/investigacion', component: Investigacion },
//   { path: '/campus', component: Campus },
//   { path: '/vida-universitaria', component: VidaUniversitaria },
//   { path: '/noticias', component: Noticias }
// ];

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// });

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app');


import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router' 
import App from './App.vue'

//Pagins
import InicioPage from '../src/components/Inicio.vue'
import CampusPage from '../src/components/Campus.vue'
import FormacionPage from '../src/components/Formacion.vue'
import InvestPage from '../src/components/Investigacion.vue'
import NoticiasPage from '../src/components/Noticias.vue'


import NavBar from "../src/components/Navbar"



const router = createRouter(
  {
    history:createWebHistory(),
    routes:[
      {path: '/',component: InicioPage},
      {path: '/Formacion',component: FormacionPage},
      {path: '/Campus',component: CampusPage},
      {path: '/Investigacion',component: InvestPage},
      {path: '/Noticias',component: NoticiasPage},
      


    ]
  }
)

const app = createApp(App)
app.use(router)
app.use(NavBar)
app.mount('#app')


