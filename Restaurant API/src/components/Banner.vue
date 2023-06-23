<script setup>

</script>


<template>
  <!-- Content divider -->
  <div class="content-divider"></div>

  <!-- Skills section -->
  <section class="skills clearfix">
    <!--  single skill  -->
    <article class="skill">
        <span class="skill-icon">
            <i class="fas fa-mug-hot"></i>
        </span>
      <h4 class="skill-title">Coffee</h4>
      <p class="skill-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, rem!</p>
    </article>
    <!--  end of single skill  -->

    <!--  single skill  -->
    <article class="skill">
        <span class="skill-icon">
            <i class="fas fa-glass-cheers"></i>
        </span>
      <h4 class="skill-title">Cold and Hot Bar</h4>
      <p class="skill-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, rem!</p>
    </article>
    <!--  end of single skill  -->

    <!--  single skill  -->
    <article class="skill">
        <span class="skill-icon">
            <i class="fas fa-bomb"></i>
        </span>
      <h4 class="skill-title">Fast Food</h4>
      <p class="skill-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, rem!</p>
    </article>
    <!--  end of single skill  -->

    <!--  single skill  -->
    <article class="skill">
        <span class="skill-icon">
            <i class="fas fa-mortar-pestle"></i>
        </span>
      <h4 class="skill-title">Family Recipe</h4>
      <p class="skill-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, rem!</p>
    </article>
    <!--  end of single skill  -->
  </section>
  <!-- End of skills section -->
</template>

<!-- ------------------------------------------------- -->

<style scoped>

/* -------- Content divider -------- */
.content-divider {
  height: 0.5rem;
  background: linear-gradient(to left, #67Be3e, #e9b969, #67Be3e);
}

/* ------------- Skills ------------- */
.skills {
  background: #edfaff; /* it doesn't work! why??? */
}

.skill {
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s linear;
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 1.25rem; /* we are in span tag and browser doesn't respect margins. to solve; we add inline-block */
  transition: all 0.3s linear;
  display: inline-block; /* we add this line because we were in [span] tag and browser doesn't respect margins ! */
  color: #67Be3e;
}

.skill-text {
  color: #617d98;
  max-width: 17rem; /* important ! */
  margin: 0 auto;
}

.skill:hover {
  background: #ffffff;
  box-shadow: 0 3px #67Be3e;
}

.skill:hover .skill-icon { /* important! --> it means that .skill:hover just section .skill-icon */
  transform: translateY(-5px);
}

@media screen and (min-width: 576px) {
  .skill {
    float: left;
    width: 50%;
  }
}

@media screen and (min-width: 1200px) {
  .skill {
    width: 25%;
  }
}

</style>