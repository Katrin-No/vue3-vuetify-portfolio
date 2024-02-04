<template>
  <!-- <a href="#About2">gdfjgnr</a> -->
  <v-card>
    <v-toolbar color="#87436a">
      <v-toolbar-title>Portfolio</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" direction="vertical" color="cyan">
        <v-tab v-for="item in navigationItems" :key="item.title" :value="item.value">
          <v-icon left class="mr-1">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-tab>
      </v-tabs>
      <v-window v-model="tab" direction="vertical">
          <v-window-item v-for="item in navigationItems" 
            class="slide" 
            :key="`window-${item.title}`" 
            :value="item.value">
              <v-card flat>
                <v-card-text>
                  <AvatarName :item="item"/>
                  <HH :item="item"/>

                  <p v-if="item.text" class="neon-cyan">{{ item.text }}</p>
                  <br/>
                  <p class="mb-0" color="#18FFFF">
                    Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor. Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor.
                  </p>

                  <TimeLine :item="item"/>
                  <!-- <SkillsStars :item="item" /> -->
                  <SkillsSota :item="item" />
                </v-card-text>
              </v-card>
          </v-window-item>
        </v-window>
    </div>
  </v-card>

  <TimeLine :item="item" :dots="dots" />
  <v-card id="About2">
    <TimeLine :item="item" :dots="dots" />
  </v-card>
</template>

<style scoped>
/* 
TODO: variables, color schema, black background

name-neon-y: #b6f177
dark-neon-vi: #87436a
neon-vi: #fbcaf2
"cyan-accent-2"
"light-green-accent-3" #8cff1a,
color="chartreuse"
*/
.neon-cyan {
  color: #06b2c2
}
</style>

<script setup>
import { ref } from "vue";
import AvatarName from "./components/AvatarName.vue";
import HH from "./components/HH.vue";
import TimeLine from "./components/TimeLine.vue";
// import SkillsStars from "./components/SkillsStars.vue";
import SkillsSota from "./components/SkillsSota.vue";

const navigationItems = [
  { value: "option-1", title: "Home", icon: "mdi-account", img: true, name: "Katrin"},
  { value: "option-2", title: "Location", icon: "mdi-pin", location: true},
  { value: "option-3", title: "Timeline", icon: "mdi-timeline-text-outline", text: "Hello2" , timeline: true},
  { value: "option-4", title: "Skills", icon: "mdi-bee", text: "Hello3", skills: true },
  { value: "option-5", title: "info", icon: "mdi-email", text: "Hello3", both: true },
];

const tab = ref("option-1");
</script>
