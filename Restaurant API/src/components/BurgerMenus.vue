<template>

  <article class="col-12 col-md-6 col-lg-4 rounded-2 theme-foods" dir="ltr">

    <img :src="image" alt="BurgerPhoto" class="img-fluid w-100 rounded rounded-5">
    <div class="py-2">
      <h4 style="font-size: 1rem; font-weight: bold; color: darkred">{{ name }}</h4>
      <p style="font-size: 1rem;"> {{ price }} $</p>
      <p class="lh-sm">{{ description }}</p>
      <p>Rate: {{rate}} ✔ ➖ Country/City: {{country}}</p>
    </div>

  </article>

</template>

<script>
export default {
  props: ['image', 'name', 'description', 'price', 'rate', 'country'],
  name: "BurgerMenus"
}
</script>

<style scoped>

</style>