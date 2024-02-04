<template>
  <v-row v-if="item.location" class="mt-2">
    <v-col-4 class="mt-8 ml-4">
      <v-avatar
        icon="$vuetify" 
        image="hh-blue.jpg" 
        size="330" 
        class="mt-4 mb-4" 
        style="border-radius: 10%">
      </v-avatar>
    </v-col-4>
    <v-col cols="8" class="ml-12">
      <h3 
        class="font-weight-bold mb-2 neon-text-db">
        Hamburg
      </h3>
      <p 
        v-for="(fact, index) in hamburgFacts" 
        class="text-h5 font-weight-light mb-1 neon-text-p"  
        :key="index">
        {{ fact }}
      </p>
      <div class="d-flex justify-end">
        <v-avatar
        icon="$vuetify" 
        image="fw-p.jpg" 
        size="300" 
        class="mb-4" 
        style="border-radius: 50%">
      </v-avatar>
      </div>
    </v-col>
  </v-row>
</template>
<!-- color: chartreuse -->

<style>
.hh-blue {
  color: #94bbfc
}
.neon-text-g {
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
.neon-text-db {
  color: rgb(148 187 252);
  text-shadow: 
    rgb(32 52 186) 0px 0px 5px, 
    rgb(9 35 150) 0px 0px 10px, 
    rgb(0 71 204) 0px 0px 20px, 
    rgb(4 29 147) 0px 0px 40px;
  font-family: "Rubik Scribble", system-ui;
}
.neon-text-p {
  font-size: 36px;
  font-weight: bold;
  color: #f6e2ff;
  text-shadow:
    0 0 10px #ee82ee21,
    0 0 15px rgb(40, 40, 40, 10),
    0 0 15px rgba(238, 130, 238, 1);
}
.neon-text-v {
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
import { defineProps } from "vue";

// Define the props the component accepts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  item: Object,
});

const hamburgFacts = [
  "- a city-state with more bridges than any other city in Europe (> 2,500)",
  "- has one of the largest and most acoustically advanced concert halls in the world (Elbphilarmonie)",
  "- 3rd largest port in Europe",
  "- the Hamburg America Line was the company that commissioned the construction of Titanic",
  "- celebrates the anniversary of the port's founding with ship parades and fireworks",
];
</script>