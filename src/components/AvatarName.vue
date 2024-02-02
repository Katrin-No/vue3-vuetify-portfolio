<template>
<v-avatar v-if="item.img" 
  icon="$vuetify" 
  image="cyber-ava.jpeg" 
  size="160" 
  class="mt-4 mb-4" 
  style="border-radius: 10%">
</v-avatar>
<h1 v-if="item.name" 
  class="font-weight-bold mt-9" 
  style="font-family: fantasy; 
  color: #b6f177">
  {{ item.name }}
</h1>
</template>
<!-- color: chartreuse -->

<script setup>
import { defineProps } from "vue";

// Define the props the component accepts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  item: Object,
});
</script>