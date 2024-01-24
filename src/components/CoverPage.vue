<template>
  <header>
    <h1>{{ name }}</h1>
    <p>{{ job }}</p>
  </header>
</template>

<script lang="ts" setup>
  export interface Props {
    name: string,
    job: string
  }
  withDefaults(defineProps<Props>(), {
    name: ''
  })
</script>
