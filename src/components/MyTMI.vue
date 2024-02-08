<template>
  <v-row v-if="item.facts" class="mt-2">
    <v-col cols="8" class="ml-12">
      <h3 class="font-weight-bold mb-2 neon-text-brown-lighten-3"> Random Facts </h3>
      <div> 
        <v-row>
          <v-col v-for="card in randomFacts"
            cols="12" md="2" :key="card.headline"
          >
            <v-card class="d-flex flex-column fill-height text-center" color="primary" variant="outlined">
              <v-card-item>
                <v-icon class="mr-1 text-h4 mb-1 font-weight-light neon-text-primary">{{ card.icon }}</v-icon>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { defineProps } from "vue";

// Define the props the component accepts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  item: Object,
});

const randomFacts = [
  {icon: "mdi-apple", text: "short description"},
  {icon: "mdi-medal-outline", text: "short description"},
  {icon: "mdi-swim", text: "short description"},
  {icon: "mdi-tennis-ball", text: "short description"},
  {icon: "mdi-basketball", text: "short description"},
  {icon: "mdi-guitar-acoustic", text: "short description"},
  {icon: "mdi-snowflake", text: "short description"},
  {icon: "mdi-penguin", text: "short description"},
  {icon: "mdi-glasses", text: "short description"},
  {icon: "mdi-pencil-outline", text: "short description"},
  {icon: "mdi-tea-outline", text: "short description"},
  {icon: "mdi-puzzle-outline", text: "short description"},
  {icon: "mdi-teddy-bear", text: "short description"},
  {icon: "mdi-home-variant-outline", text: "short description"},
  {icon: "mdi-forest-outline", text: "short description"},
  {icon: "mdi-run", text: "short description"},
  {icon: "mdi-bike", text: "short description"},
  {icon: "mdi-bicycle", text: "short description"},
  {icon: "mdi-airplane", text: "short description"},
];
</script>