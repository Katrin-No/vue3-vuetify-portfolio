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
          <v-window-item v-for="item in navigationItems" :key="`window-${item.title}`" 
            class="slide" :value="item.value">
              <v-card flat>
                <v-card-text>
                  <AvatarName :item="item"/>
                  <HH :item="item"/>

                  <p v-if="item.text" class="neon-cyan">{{ item.text }}</p>
                  <br/>
                  <p class="mb-0" color="#18FFFF">
                    Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor. Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor. Phasellus dolor. Fusce neque.
                  </p>

                  <TimeLine :item="item"/>
                  <!-- <SkillsStars :item="item" /> -->
                  <SkillsSota :item="item" />
                  <PTT :item="item" />
                  <MyTMI :item="item" />
                </v-card-text>
                <!-- <NeuroCalendar /> -->
              </v-card>
          </v-window-item>
        </v-window>
    </div>
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
// import NeuroCalendar from "./components/NeuroCalendar.vue";
import PTT from "./components/PTT.vue";
import MyTMI from "./components/MyTMI.vue";

const navigationItems = [
  { value: "option-1", title: "Home", icon: "mdi-account", img: true, name: "Katrin"},
  { value: "option-2", title: "Location", icon: "mdi-map-marker-outline", location: true},
  { value: "option-3", title: "Timeline", icon: "mdi-timeline-text-outline", text: "Hello2" , timeline: true},
  { value: "option-4", title: "Skills", icon: "mdi-hexagon-multiple-outline", text: "Hello3", skills: true },
  { value: "option-5", title: "PTT", icon: "mdi-head-snowflake-outline", text: "Hello3", neuro: true },
  { value: "option-6", title: "TMI", icon: "mdi-information-outline", text: "Hello3", facts: true },
];

const tab = ref("option-1");
</script>
