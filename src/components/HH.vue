<template>
  <v-row class="mt-2">
    <v-col-4 class="mt-8 ml-4">
      <ImageCard image="hh-blue.jpg" size="330" />
    </v-col-4>
    <v-col cols="8" class="ml-12">
      <h3 class="font-weight-bold mb-2" :class="`neon-text-${color}`"> Hamburg </h3>
      <FactsCards :color="color" />
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <RadioButtons :radioButtons="radioButtons" v-model="color"/>
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
  color: #ffffffdb;
  text-shadow: 
  0 0 5px #87f99a8c, 
  0 0 10px #46b640cc, 
  0 0 20px #37efa461, 
  0 0 40px #3ca8829e;
}
.neon-text-b {
  color: #ccf; /* Light blue text color */
  text-shadow:
    0 0 5px #add8e6, /* Inner light blue glow */
    0 0 10px #87ceeb, /* Middle light blue glow */
    0 0 20px #00bfff, /* Outer light blue glow */
    0 0 40px #1e90ff, /* Extra outer blue glow */
    0 0 80px #0000ff; /* Farthest outer deep blue glow */
}
.neon-text-brown-lighten-3 {
  color: rgb(148 187 252);
  text-shadow: 
    rgb(32 52 186) 0px 0px 5px, 
    rgb(9 35 150) 0px 0px 10px, 
    rgb(0 71 204) 0px 0px 20px, 
    rgb(4 29 147) 0px 0px 40px;
}
.neon-text-primary {
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
import ImageCard from "./../reusable/ImageCard.vue";
import FactsCards from "./../reusable/FactsCards.vue";
import RadioButtons from "./../reusable/RadioButtons.vue";

const color = ref("primary");

const radioButtons = [
  { label: "primary", color: "primary", value: "primary" },
  { label: "green-accent-2", color: "green-accent-2", value: "green-accent-2" },
  { label: "secondary", color: "secondary", value: "secondary" },
  { label: "brown-lighten-3", color: "brown-lighten-3", value: "brown-lighten-3" },
];
</script>