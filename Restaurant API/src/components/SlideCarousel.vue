<template>

  <section class="container-fluid my-5">
    <div class="container">
      <div class="py-4">
        <h3 class="fw-bold" style="font-size: 1.5rem;">نماهایی از رستوران</h3>
      </div>
      <section class="container-fluid">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators d-none d-lg-flex">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                    class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/restaurant/pexels-julia-avamotive-2220618.jpg" class="d-block w-100 rounded rounded-5"
                   alt="Slide 1">
            </div>
            <div class="carousel-item">
              <img src="../assets/restaurant/pexels-klaus-nielsen-6287491.jpg"
                   class="d-block w-100 rounded rounded-5" alt="Slide 2">
            </div>
            <div class="carousel-item">
              <img src="../assets/restaurant/pexels-rene-asmussen-4180994.jpg"
                   class="d-block w-100 rounded rounded-5" alt="Slide 3">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  </section>

</template>

<script>
export default {
  name: "SlideCarousel",
}
</script>

<style scoped>

</style>