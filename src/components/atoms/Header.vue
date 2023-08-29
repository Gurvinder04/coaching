<template>
  <headroom>
    <header>
      <nav class="bg-white md: rounded-full design px-4 py-2 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-12">
    <!-- <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm" aria-controls="navbar-default" aria-expanded="false">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> -->
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4  md: p-0 mt-0 bg-transparent items-center md:flex-row h-12">
        <li>
          <a href="#" >Philosophie et Services</a>
        </li>
        <li>
          <a href="#">A propos</a>
        </li>
        <li>
          <a href="#">Temoignages</a>
        </li>
        <li>
          <a href="#">Podcasts et Videos</a>
        </li>
        <li>
          <a href="#">Partenaires</a>
        </li>
      </ul>
    </div>
    <button class="text-pink-500 flex items-center p-4 ml-3 rounded-full border-2 border-pink-500 h-12">Prendre rendez-vous</button>
  </div>
</nav>
    </header>
  </headroom>
</template>


<script  setup lang="ts">



</script>

<style scoped>

.headroom{
 will-change: transform;
 transition: transform 200ms linear;
}

header{
  padding: 20px;
  position: fixed;
  z-index: 10;
  left: 100;
  right: 0;
  top: 0;
  
}



.design{
  box-shadow: 0px 0px 4px 4px #e5e7eb7a;
}

li{
  margin-left: 20px;
  margin-right: 20px;
}
a{
  display: block;
  padding-right: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 3px;
  color:  black;
  border-radius: 0.25rem;
  border-right: 2px solid #c4c4c4;
  padding: 15px;
}
</style>
