<template>

    <header class="header">
        <div class="banner">
            <h2>Welcome to McDonalds Restaurants</h2>
            <h1>specially<br />
                crafted Food, Burgers and Drinks</h1>

            <a href="#menus" class="btn-banner banner-btn"><b>نمایش غذاها و منوها</b></a>
        </div>
    </header>
    
</template>

<!-- -------------------------------------------------- -->

<script>
export default {
    name: "Slider"
}
</script>

<!-- -------------------------------------------------- -->

<style scoped>

h1 {
  font-family: 'Barlow Condensed', fantasy;
}

a {
  text-decoration: none;
}

:root {
  --clr-primary: #67Be3e;
  --clr-primary-light: #beed8c;
  --clr-grey-1: #102a42;
  --clr-grey-5: #617d98;
  --clr-grey-10: #edfaff;
  --clr-white: #ffffff;
  --ff-primary: 'Catmaran', sans-serif;
  --ff-secondary: 'Barlow Condensed', sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.25rem;
  --radius: 0.5rem;
}

.header {
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url("../assets/restaurant/pexels-pixabay-262978.jpg") center/cover no-repeat fixed;
    position: relative;
    /* Animation */
    overflow-x: hidden;
    /* because of animation */

    /*overflow-x: visible|hidden|scroll|auto|initial|inherit;*/
}

.banner {
    /* important- use it for other projects...^_^ */
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.banner h1 {
  text-transform: uppercase;
  color: white;
  margin-top: 1.25rem;
  margin-bottom: 2rem;
  /* Animation */
  /*animation: slideFromLeft 5s ease-in-out 1;*/
}

.banner h2 {
  font-family: var(--ff-secondary);
  color: wheat;
  /* Animation */
  animation: slideFromRight 5s ease-in-out 1;
}

.banner-btn {
  outline: 0.125rem solid #67Be3e;
  outline-offset: 0.25rem;
  font-size: 1.25rem;
  padding: 1rem 1.75rem;
  /* Animation */
  animation: show 5s linear 1;
}

.btn-banner { /* Generic Class for All Buttons. */
  text-transform: uppercase;
  background: #67Be3e;
  color: var(--clr-white);
  padding: 0.5rem 1rem;
  display: inline-block;
  font-weight: 700; /* The value of bolding */
  transition: all 0.3s linear; /* all 0.3s linear */
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.btn-banner:hover {
  color: black;
  background: green;
}
</style>