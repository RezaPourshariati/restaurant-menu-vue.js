import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
// import * as Vue from 'vue' // in Vue 3
import axios from 'axios';
import VueAxios from 'vue-axios';

// import NavbarVue from './components/NavbarVue.vue';

const app = createApp(App);

app.use(VueAxios, axios); // axios

// app.component('navbar-vue', NavbarVue);
app.use(router);

app.mount('#app');
