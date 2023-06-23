import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import LoginSignUp from "@/views/LoginSignUp.vue";
import SignUp from "../components/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/Login-signup',
      name: 'login-signup',
      component: LoginSignUp
    },
    {
      path: '/SignUp',
      name: 'signUp',
      component: SignUp
    }
  ]
})

export default router
