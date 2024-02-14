<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="auto">
    <v-card-item>
      <h3>{{ randomItem.title }}</h3>
      <v-card-subtitle>
        <span class="me-1">{{randomItem.tag}}</span>
        <v-icon color="success" icon="mdi-seed" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <v-row>
        <v-col cols="3">
          <div class="my-4 text-h5">Ingredients</div>
          <div v-for="ingredient in randomItem.ingredients" :key="ingredient" class="text-h6 font-weight-light">
            • {{ ingredient }}
          </div>
        </v-col>
        <v-col cols="8">
          <div v-if="randomItem.steps">
            <div class="my-4 text-h5">Steps</div>
            <v-row v-for="(step, stepIndex) in randomItem.steps" :key="stepIndex" class="flex-nowrap">
              <v-chip variant="outlined" class="ma-2" color="green">{{ stepIndex + 1}}</v-chip>
              <p class="text-h6 font-weight-light align-self-center">{{ step }}</p>
            </v-row>
            <div v-if="randomItem.notes" class="my-4 text-h5">Notes</div>
            <ul v-for="note in randomItem.notes" :key="note" class="text-h6 font-weight-light">
              <li> {{ note }}</li>
            </ul> <!--  mdi-note-outline -->
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider class="mx-4 mb-1"></v-divider>
  </v-card>
</template>

  
<script setup>
import { ref, defineProps, onMounted } from "vue";
import recipies from "../data/recipies.js";

const recipiesEntries = ref(recipies); 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  dots: Object,
});

const recipe = {
  id: 24,
  title: "Avocado-Wrap ⭐",
  ingredients: [
    "1 Dose(n) (à 425 ml) Kichererbsen",
    "2 rote Paprikaschoten",
    "1 Zucchini",
    "150 g Kirschtomaten",
    "1 rote Zwiebel",
    "5 EL Olivenöl",
    "Curry, Salz, Pfeffer",
    "1/2 Limette",
    "1 Avocado",
    "1/2 Bund Koriander",
    "1 Pck. Weizentortillas (8 Stück; 320 g)",
  ],
  steps: [
    "Kichererbsen im Sieb abspülen, abtropfen lassen.",
    "Zwiebel, Paprika und Zucchini klein würfeln. Tomaten halbieren.",
    "4 EL Öl in einer Pfanne erhitzen. Paprika, Zucchini und Zwiebel darin ca. 3 Minuten braten.",
    "1 EL Curry, Kichererbsen und Tomaten zugeben, ca. 2 Minuten weiterbraten. Mit Salz und Pfeffer würzen.",
    "Guacamole zubereiten.",
    "Tortillas in einer Pfanne ohne Fett von ­jeder Seite 10–20 Sekunden erhitzen. Mit Avocadomus, Gemüse und Koriander füllen und aufrollen.",
  ],
  tag: "Gemüse",
};

const randomItem = ref(recipe);
// Select a random item when the component is mounted
onMounted(() => {
  const randomIndex = Math.floor(Math.random() * recipiesEntries.value.length);
  randomItem.value = recipiesEntries.value[randomIndex];
});
</script>
  