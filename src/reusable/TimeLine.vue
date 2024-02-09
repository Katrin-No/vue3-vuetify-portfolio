<template>
  <v-timeline side="end">
    <v-timeline-item v-for="dot in dots" :key="dot.id" :dot-color="dot.color" size="small">
      <template v-slot:opposite>
        <div :class="`pt-1 headline font-weight-bold text-${dot.color}`" v-text="dot.data"></div>
      </template>
      <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${dot.color}`">
          {{ dot.title }}
        </h2>
        <div>{{ dot.text }}</div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
  
<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  dots: Object,
});
</script>
  