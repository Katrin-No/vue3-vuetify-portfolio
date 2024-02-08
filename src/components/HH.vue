<template>
  <v-row class="mt-2">
    <v-col-4 class="mt-8 ml-4">
      <v-avatar
        image="hh-blue.jpg" 
        size="330" 
        class="mt-4 mb-4" 
        style="border-radius: 10%">
      </v-avatar>
    </v-col-4>
    <v-col cols="8" class="ml-12">
      <h3 class="font-weight-bold mb-2 neon-text-brown-lighten-3"> Hamburg </h3>
      <v-row>
        <v-col v-for="card in hamburgFactsCards"
          cols="12" md="4" :key="card.headline"
        >
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
      <v-row align="center">
        <v-col cols="auto">
          <v-radio-group v-model="color" inline>
            <v-radio v-for="button in radioButtons" :key="button.value" 
              :label="button.label" :value="button.value" :color="button.color">
            </v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style>
.hh-blue {
  color: #94bbfc
}
.neon-text-green-accent-2 {
  color: #fff; /* White text color */
  text-shadow:
    0 0 5px #c8e6c9, /* Inner light green glow */
    0 0 10px #66bb6a, /* Middle light green glow */
    0 0 20px #66bb6a, /* Outer light green glow */
    0 0 40px #009688, /* Extra outer light green glow */
    0 0 80px #009688; /* Farthest outer light green glow */
  font-size: 40px;
  font-weight: bold;
  /* font-family: 'Arial', sans-serif; */
  font-family: "Rubik Scribble", system-ui;
}
.neon-text-b {
  color: #ccf; /* Light blue text color */
  text-shadow:
    0 0 5px #add8e6, /* Inner light blue glow */
    0 0 10px #87ceeb, /* Middle light blue glow */
    0 0 20px #00bfff, /* Outer light blue glow */
    0 0 40px #1e90ff, /* Extra outer blue glow */
    0 0 80px #0000ff; /* Farthest outer deep blue glow */
  font-size: 40px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
}
.neon-text-brown-lighten-3 {
  color: rgb(148 187 252);
  text-shadow: 
    rgb(32 52 186) 0px 0px 5px, 
    rgb(9 35 150) 0px 0px 10px, 
    rgb(0 71 204) 0px 0px 20px, 
    rgb(4 29 147) 0px 0px 40px;
  font-family: "Rubik Scribble", system-ui;
}
.neon-text-primary {
  font-size: 36px;
  font-weight: bold;
  color: #f6e2ff;
  text-shadow:
    0 0 10px #ee82ee21,
    0 0 15px rgb(40, 40, 40, 10),
    0 0 15px rgba(238, 130, 238, 1);
}
.neon-text-secondary {
  color: rgb(213 172 254);
  text-shadow: 
    rgb(44 8 62) 0px 0px 5px,
    rgb(72 17 87) 0px 0px 10px,
    rgb(126 0 204) -9px 7px 12px, 
    rgb(87 0 173) 0px 0px 40px, 
    rgb(98 0 204) 0px 0px 80px;
}
</style>

<script setup>
import { ref } from "vue";

// // Define the props the component accepts
// const props = defineProps({
//   item: Object,
// });

const color = ref("primary");

const radioButtons = [
  { label: "primary", color: "primary", value: "primary" },
  { label: "green-accent-2", color: "green-accent-2", value: "green-accent-2" },
  { label: "secondary", color: "secondary", value: "secondary" },
  { label: "brown-lighten-3", color: "brown-lighten-3", value: "brown-lighten-3" },
];

const hamburgFactsCards = [
  {overline: "Germany", headline: "city-state", text: "enjoying a high degree of autonomy"},
  {overline: "Bridges", headline: "> 2,500", text: "more than any other city in Europe"},
  {overline: "Port", headline: "3rd", text: "largest in Europe (after Rotterdam and Antwerp)"},
  {overline: "Hamburg America Line", headline: "Titanic", text: "the company that commissioned the construction"},
  {overline: "Concert hall", headline: "Elbphilarmonie", text: "one of the largest and most acoustically advanced in the world"},
  {overline: "Fireworks", headline: "Ship parade", text: "celebrates the anniversary of the port's founding"},
];
</script>