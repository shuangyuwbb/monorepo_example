<template>
  <FsCard v-bind="curArgs" v-model="value">
    <h1>{{ msg }}</h1>
  </FsCard>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

defineOptions({
  name: 'Example'
})

defineProps<{ msg: string }>()

const value = ref(true)
const curArgs = computed(() => ({
  type: 'content',
  title: 'BOCHUI卡片标题',
  isCardFold: true,
  showSwitch: true,
  switchOpenText: '开',
  switchCloseText: '关'
}))
</script>

<style scoped lang="less">

</style>
