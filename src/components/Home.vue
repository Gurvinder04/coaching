<script setup lang="ts">
// import Header from './Header.vue'


</script>

<template>
  <div class=" grid grid-cols-1 justify-items-center w-full md:grid-cols-2 lg:grid-cols-2">
    <div class=" relative mt-5">
      <img
        src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
        alt="DOG" class=" md:h-screen w-screen m-3 object-cover">
      <div class="absolute flex text-center top-40 p-5">
        <h1 class="text-head font-semibold text-4xl md:text-6xl"> Victoria Thissen<br>Comportementaliste<br>& Coach
          Canin </h1>
        <button class="bg-pink-500 rounded-full  text-white p-3 w-64  text-md m-4">
          Prendre rendez-vous
        </button>
      </div>
    </div>
    <div>
      <div class=" p-5  md:mt-60">
        <h1 class="text-head text-2xl p-5">Philosophie et Services</h1>
        <p class="text-lightGray p-5 w-96">Avec une passion profonde pour les animaux de compagnie et une solide
          expérience, la philosophie de Victoria repose sur le renforcement positif, la compréhension de la personnalité
          unique de chaque chien, et l'adaptation des techniques de coaching à leurs besoins. Car votre plus fidèle
          compagnon mérite le meilleur environnement pour s'épanouir, et Victoria est là pour vous guider et vous
          accompagner.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.vectorImg {
  height: 49px;
  width: 49px;
  display: inline;
}
</style>
