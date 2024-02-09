<template>
  <v-row>
    <v-col v-for="card in hamburgFactsCards" cols="12" md="4" :key="card.headline">
      <v-card class="d-flex flex-column fill-height" :color="color" variant="outlined">
        <v-card-item>
          <div class="text-overline mb-1">
            {{ card.overline }}
          </div>
          <div :class="`text-h4 mb-1 font-weight-light neon-text-${color}`">
            {{ card.headline }}
          </div>
          <div class="text-h6 font-weight-light mb-1">
            {{ card.text }}
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  color: String,
});

const hamburgFactsCards = [
  {overline: "Germany", headline: "city-state", text: "enjoying a high degree of autonomy"},
  {overline: "Bridges", headline: "> 2,500", text: "more than any other city in Europe"},
  {overline: "Port", headline: "3rd", text: "largest in Europe (after Rotterdam and Antwerp)"},
  {overline: "Hamburg America Line", headline: "Titanic", text: "the company that commissioned the construction"},
  {overline: "Concert hall", headline: "Elbphilarmonie", text: "one of the largest and most acoustically advanced in the world"},
  {overline: "Fireworks", headline: "Ship parade", text: "celebrates the anniversary of the port's founding"},
];
</script>