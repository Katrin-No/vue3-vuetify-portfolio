<template>
  <v-row class="mb-2">
    <h3 class="font-weight-bold mb-2 neon-text-brown-lighten-3"> Random Facts </h3>
    <v-col cols="9">
      <v-row>
        <v-col v-for="card in randomFacts"
          cols="12" md="2" :key="card.icon"
        >
          <v-card>
            <div class="text-center card" @click="flipCard(card)" :class="{ 'flipped': card.isFlipped }">
              <v-card-item class="card-front"> <!-- v-if="!card.isFlipped" -->
                <v-icon class="mr-1 text-h4 mb-1 font-weight-light neon-text-primary">{{ card.icon }}</v-icon>
              </v-card-item>
               <v-card-item class="card-back">  <!-- v-if="card.isFlipped" -->
                <p class="mr-1 text-h6 mb-1 font-weight-light neon-text-primary">{{ card.text }}</p>
              </v-card-item>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style>
.card {
  width: 141px;
  height: 141px;
  transform-style: preserve-3d;
  transition: transform 0.7s;
  cursor: pointer; 
  border: 1px solid #2196f3;
  border-radius: 7%;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.card-back {
  transform: rotateY(180deg);
}
</style>

<script setup>
import { ref } from "vue";

function flipCard(card) {
  card.isFlipped = !card.isFlipped;
}

const randomFacts = ref([
  {isFlipped: false, icon: "mdi-meditation", text: "phlegmatic"},
  {isFlipped: false, icon: "mdi-apple", text: "working on Mac"},
  {isFlipped: false, icon: "mdi-home-variant-outline", text: "home office"},
  {isFlipped: false, icon: "mdi-tea-outline", text: "milky oolong"},
  {isFlipped: false, icon: "mdi-snowflake", text: "miss it very much"},
  {isFlipped: false, icon: "mdi-penguin", text: "cannot handle above 20°C"},
  {isFlipped: false, icon: "mdi-swim", text: "have some medals"},
  {isFlipped: false, icon: "mdi-bike", text: "ca. 800 km last year"},
  {isFlipped: false, icon: "mdi-tennis-ball", text: "played 4 years in university"},
  {isFlipped: false, icon: "mdi-basketball", text: "with friends outside"},
  {isFlipped: false, icon: "mdi-run", text: "after work jogging"},
  {isFlipped: false, icon: "mdi-forest-outline", text: "for stress relief"},
  {isFlipped: false, icon: "mdi-music-circle-outline", text: "brightens mood"},
  {isFlipped: false, icon: "mdi-guitar-acoustic", text: "know some chords"},
  {isFlipped: false, icon: "mdi-pencil-outline", text: "sketch some times"},
  {isFlipped: false, icon: "mdi-puzzle-outline", text: "enjoy it"},
  {isFlipped: false, icon: "mdi-teddy-bear", text: "still have it"},
  {isFlipped: false, icon: "mdi-airplane", text: "visited 17 contries"},
]);
</script>