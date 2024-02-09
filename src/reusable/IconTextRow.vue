<template>
  <v-row class="font-weight-light text-body-1">
    <v-col cols="2">
      <v-icon class="mr-1">{{ icon }}</v-icon>
    </v-col>
    <v-col>{{ text }}</v-col>
  </v-row>
</template>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  icon: String,
  text: String,
});
</script>