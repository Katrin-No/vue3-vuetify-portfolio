<template>
  <v-row class="mr-8">
    <v-col cols="12">
      <h3 class="font-weight-bold mb-2 neon-text-brown-lighten-3"> Rezepten </h3>
      <RadioButtons :radioButtons="radioButtons" v-model="selectedTag" @change="filterEntries()" />
      <h2 class="mb-4">Einträge: {{ count }}</h2>
      <v-row>
        <v-col v-for="entry in filteredEntries" cols="12" md="2" :key="entry.id">
          <v-card class="d-flex flex-column fill-height" rounded="shaped" :color="tagToColor[entry.tag]" variant="outlined">
            <v-card-item>
              <div class="text-overline mb-1">{{ entry.title }}</div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, computed } from "vue";
import RadioButtons from "./../reusable/RadioButtons.vue";
import recipies from "../data/recipies.js";

const recipiesEntries = ref(recipies); 

const radioButtons = [
  { label: "Alle", value: "all", color: "deep-purple"},
  { label: "Asiatisch", value: "Asiatisch", color: "orange"},
  { label: "Gemüse", value: "Gemüse", color: "teal"},
  { label: "Suppe", value: "Suppe", color: "yellow"},
  { label: "Fisch", value: "Fisch", color:"blue"},
  { label: "Russisch", value: "Russisch", color:"purple-accent-2"},
  { label: "Fleisch", value: "Fleisch", color:"deep-orange"}
];
const selectedTag = ref("all");
const tagToColor = {
  "Asiatisch": "orange",
  "Gemüse": "teal-accent-3",
  "Suppe": "yellow",
  "Fisch": "light-blue",
  "Russisch": "purple-accent-2",
  "Fleisch": "deep-orange"
};

const filteredEntries = ref([...recipiesEntries.value]);

const randomOrder = recipiesEntries.value.sort(() => Math.random() - 0.5);

const filterEntries = () => {
  filteredEntries.value = selectedTag.value === "all" ? randomOrder
    : recipiesEntries.value.filter(entry => entry.tag === selectedTag.value);
};

const count = computed(() => {
  return filteredEntries.value.length;
});
</script>