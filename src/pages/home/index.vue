<template>
  <p>首页</p>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'

  onMounted(() => {
    console.log('您访问了首页')
  })
</script>
