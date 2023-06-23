<script setup>
import {ref} from 'vue';
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import PizzaMenus from "@/components/PizzaMenus.vue";
import BurgerMenus from "@/components/BurgerMenus.vue";
import DrinksMenus from "@/components/DrinksMenus.vue";
import IceCreamMenus from "@/components/IceCreamMenus.vue";
import SlideCarousel from "@/components/SlideCarousel.vue";


// const url = 'https://jsonplaceholder.typicode.com/users';

const pizzaFood = ref(null);

function getPizzas() {
  fetch("http://localhost:3000/pizzas")
      .then(response => response.json())
      .then(data => pizzaFood.value = data)
  // console.log(pizzaFood);
  return pizzaFood;
}

getPizzas();

const burgerFood = ref(null);

function getBurgers() {
  fetch("http://localhost:3000/burgers")
      .then(response => response.json())
      .then(data => burgerFood.value = data)
  // console.log(burgerFood);
  return burgerFood;
}

getBurgers();

const drinks = ref(null);

function getDrinks() {
  fetch("http://localhost:3000/drinks")
      .then(response => response.json())
      .then(data => drinks.value = data)
  // console.log(burgerFood);
  return drinks;
}

getDrinks();

const iceCreams = ref(null);

function getIceCreams() {
  fetch("http://localhost:3000/ice-cream")
      .then(response => response.json())
      .then(data => iceCreams.value = data)
  // console.log(burgerFood);
  return iceCreams;
}

getIceCreams();


</script>

<!-- ----------------------------------------------------- -->

<template>
  <Header/>
  <Banner/>
  <SlideCarousel/>

  <!--  <div v-for="customer in customers" :key="customer.id">-->
  <!--    <h4>{{ customer.dsc }}</h4>-->
  <!--    <p>{{ customer.name }}</p>-->
  <!--    <p>{{ customer.price }}</p>-->
  <!--    <img :src="customer.img" alt="image is loading...">-->
  <!--  </div>-->

  <!-- Pizzas -->
  <section class="container-fluid my-5">
    <div class="container">
      <div class="py-4">
        <h3 class="fw-bold text-center" id="menus" style="font-size: 1.5rem;">منوی پیتزاهای درجه یک و خوشمزه</h3>
      </div>

      <div class="row">
        <PizzaMenus v-for="pizza in pizzaFood"
                    :key="pizza.id"
                    :image="pizza.img"
                    :name="pizza.name"
                    :description="pizza.dsc"
                    :price="pizza.price"
                    :rate="pizza.rate"
                    :country="pizza.country"/>
      </div>
    </div>
  </section>

  <!-- Burgers -->
  <section class="container-fluid my-5">
    <div class="container">
      <div class="py-4">
        <h3 class="fw-bold text-center" style="font-size: 1.5rem;">منوی هبرگر های خاص و ویژه</h3>
      </div>

      <div class="row">
        <BurgerMenus v-for="burger in burgerFood"
                     :key="burger.id"
                     :image="burger.img"
                     :name="burger.name"
                     :description="burger.dsc"
                     :price="burger.price"
                     :rate="burger.rate"
                     :country="burger.country"/>
      </div>
    </div>
  </section>

  <!-- Drinks -->
  <section class="container-fluid my-5">
    <div class="container">
      <div class="py-4">
        <h3 class="fw-bold text-center" style="font-size: 1.5rem;">منوی نوشیدنی های سرد و گرم</h3>
      </div>

      <div class="row">
        <DrinksMenus v-for="drink in drinks"
                     :key="drink.id"
                     :image="drink.img"
                     :name="drink.name"
                     :description="drink.dsc"
                     :price="drink.price"
                     :rate="drink.rate"
                     :country="drink.country"/>
      </div>
    </div>
  </section>

  <!-- Drinks -->
  <section class="container-fluid my-5">
    <div class="container">
      <div class="py-4">
        <h3 class="fw-bold text-center" style="font-size: 1.5rem;">منوی انواع بستنی ها</h3>
      </div>

      <div class="row">
        <IceCreamMenus v-for="iceCream in iceCreams"
                       :key="iceCream.id"
                       :image="iceCream.img"
                       :name="iceCream.name"
                       :description="iceCream.dsc"
                       :price="iceCream.price"
                       :rate="iceCream.rate"
                       :country="iceCream.country"/>
      </div>
    </div>
  </section>


</template>


<style>

</style>