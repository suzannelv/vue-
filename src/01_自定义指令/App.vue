<template>
  <div class="app">
   <h2 v-ftime ="'YYYY/MM/DD'">{{ timestamp }}</h2> 
   <h2 v-ftime >{{ 1256548986432 }}</h2> 

  </div>
</template>



<script setup>
const timestamp = 1234345328

</script>

<style scoped>
</style>