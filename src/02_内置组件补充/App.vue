<template>
  <div class="app">
    <suspense>
      <template #default>
        <AsyncHome/>
      </template>
      <!-- 上面的加载出来之前， 下面的是应急组件 -->
      <template #fallback>
        <h2>loading</h2>
      </template>
    </suspense>

  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';


 const AsyncHome = defineAsyncComponent(()=> import ('./AsyncHome.vue'))
</script>

<style scoped>
</style>