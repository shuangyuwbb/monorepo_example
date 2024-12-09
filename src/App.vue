<script setup lang="ts">
import Example from './components/Example.vue'
</script>

<template> 
  <a href="https://wiki.fsdev.cn/frontend/storybook" target="_blank">
    <img src="/group.svg" class="logo" alt="Vite  logo">
  </a>
  <a href="https://wiki.fsdev.cn/frontend/storybook" target="_blank">
    <img src="./assets/bochui.svg" class="logo vue" alt="Vue logo">
  </a>
  <Example msg="Vite + Vue + TS example project" />
</template>

<style scoped lang="less">

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
