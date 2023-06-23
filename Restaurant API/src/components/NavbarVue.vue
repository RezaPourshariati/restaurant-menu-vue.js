<script setup>

</script>

<template>
  <div dir="ltr">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">McDonalds Restaurants 🍟🍔</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active">خانه</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/contact" class="nav-link">تماس با ما</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/login-signup" class="nav-link active">ورود/ ثبت نام</router-link>
            </li>

          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success mx-3" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>


<style lang="">

</style>