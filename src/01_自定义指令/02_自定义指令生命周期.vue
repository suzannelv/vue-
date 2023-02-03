<template>
  <div class="app">
    <button @click="counter++">+1</button>
    <button @click="showTitle=false">cacher</button>
    <h2 v-if ="showTitle" class="title" v-why>kiki:{{ counter }}</h2>

    
  </div>
</template>



<script setup>
import { ref } from 'vue';


const counter = ref(0)
const showTitle = ref(true)
const VWhy = {
   created() {
    console.log("created")
   },
   beforeMount() {
    console.log("beforeMount")
   },
   mounted() {
     console.log("mounted")
   },
   beforeUpdate() {
    console.log("beforeUpdate")
   },
   updated() {
    console.log("updated")
   },
   beforeUnmount() {
    console.log("beforeUnmount")
   },
   unmounted() {
    console.log("unmounted")
   },
}

</script>

<style scoped>
</style>