<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import Example from './components/Example.vue'
import { A } from '@fsdev/a'
import { B } from '@fsdev/b'
let a = new A()
console.log('#######')
let b = new A()

let c = A.getInstance()

let b1 = reactive(B.getInstance())
b1.init()

console.log(b1, '--b')

onMounted(() => {
  console.log(a, 'a')
  console.log(a === b)
  console.log(a === c)
  setTimeout(() => {
    a.title = 'jjoo333jj'
  }, 3000)
})
</script>

<template>
  <a href="https://wiki.fsdev.cn/frontend/storybook" target="_blank">
    <img src="/group.svg" class="logo" alt="Vite logo">
  </a>
  <a href="https://wiki.fsdev.cn/frontend/storybook" target="_blank">
    <img src="./assets/bochui.svg" class="logo vue" alt="Vue logo">
  </a>
  <Example :msg="a.title" />
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
