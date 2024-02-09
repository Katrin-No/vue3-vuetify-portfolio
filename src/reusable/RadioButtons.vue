<template>
  <v-radio-group inline>
    <v-radio v-for="button in radioButtons" :key="button.value" 
      :label="button.label" :value="button.value" :color="button.color">
    </v-radio>
  </v-radio-group>
</template>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  radioButtons: Object,
});
</script>