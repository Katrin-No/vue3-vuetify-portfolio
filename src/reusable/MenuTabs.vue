<template>
  <v-tabs direction="vertical" color="cyan">
    <v-tab v-for="tab in tabs" :key="tab.title" :value="tab.value">
      <v-icon left class="mr-1">{{ tab.icon }}</v-icon>
      {{ tab.title }}
    </v-tab>
  </v-tabs>
</template>

<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  tabs: Object,
});

const tab = ref("option-1");
</script>
