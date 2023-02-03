<template>
  <div class="app">
    <!-- <input type="text" ref="inputRef"> -->
    <input type="text" v-focus>

  </div>
</template>


<!-- <script>
export default {
  directives: {
    focus: {
      // 放声明周期的函数 (自定义指令)
      mounted(el) {
        // console.log(el)
        el?.focus()
      }
    }
  }
}
</script> -->
<script setup>

// 方式一：定义ref绑定到input中，调用focus
// import useInput from './hooks/useInput'
// const {inputRef} = useInput()

// 方式二：自定义指令[局部指令]

// const vFocus = {
//   mounted(el) {
//         // console.log(el)
//         el?.focus()
//       }
// }
</script>

<style scoped>
</style>