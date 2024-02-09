<template>
  <v-avatar
    :image="image" 
    :size="size" 
    class="mt-4 mb-4" 
    style="border-radius: 10%">
  </v-avatar>
</template>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  image: String,
  size: String
});
</script>