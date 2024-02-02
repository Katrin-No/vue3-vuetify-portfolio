<template>
    <v-timeline v-if="item.timeline" side="end">
      <v-timeline-item
        v-for="dot in dots"
        :key="dot.id"
        :dot-color="dot.color"
        size="small"
      >
        <template v-slot:opposite>
          <div :class="`pt-1 headline font-weight-bold text-${dot.color}`" v-text="dot.data"></div>
        </template>
        <div>
          <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${dot.color}`">
            {{ dot.title }}
          </h2>
          <div>{{ dot.company }}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </template>
  
<script setup>
import { defineProps } from "vue";

// Define the props the component accepts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  item: Object,
});

const dots = [
  { id: 1, color: "cyan-accent-2", data: "2022 - now", title: "Junior Software Engineer", company: "Telefónica Germany GmbH & Co. OHG  "},
  { id: 2, color: "light-green-accent-3", data: "2019 - 2022", title: "Ausbildung Fachinformatiker Anwendungsentwicklung", company: "Telefónica Germany GmbH & Co. OHG  "},
  { id: 3, color: "cyan-accent-2", data: "2015 - 2019", title: "Student", company: "Uni"},
  { id: 4, color: "light-green-accent-3", data: "2004 - 2015", title: "Schüler", company: "Gymnasium"},
];
</script>
  