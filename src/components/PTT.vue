<template>
  <v-row class="mr-8">
    <v-col cols="12">
      <h3 class="font-weight-bold mb-2 neon-text-brown-lighten-3"> Neuro Diary </h3>
      <RadioButtons :radioButtons="radioButtons" v-model="selectedColor" @change="filterEntries" />
      <h2 class="mb-4">Einträge: {{ count }}</h2>
      <v-row>
        <v-col v-for="entry in filteredEntries" cols="12" md="2" :key="entry.id">
          <v-card class="d-flex flex-column fill-height" rounded="shaped" :color="entry.intensity" variant="outlined">
            <v-card-item>
              <v-row class="ptt-card-header d-flex flex-nowrap">
                <v-col>
                  <div :class="`text-h4 mb-1 font-weight-light neon-text-${color}`">
                    {{ entry.duration }}
                  </div>
                </v-col>
                <v-col v-if="entry.medication" cols="2">
                  <v-icon center class="mr-1">mdi-alert-circle-outline</v-icon>
                </v-col>
                <v-col cols="4" class="align-self-end">
                  <div class="text-intensity mb-1"> {{ convertDate(entry.date) }} </div>
                  <div class="font-weight-light mb-1 text-body-1">{{ entry.gone }} </div>
                </v-col>
              </v-row>
              <v-divider :color="entry.intensity" :thickness="2" class="mb-2"></v-divider>
              <div class="ptt-card-body">
                <IconTextRow icon="mdi-help-circle-outline" :text="entry.reason" />
                <IconTextRow icon="mdi-head-sync-outline" text="!Konzentration" v-if="entry.noConcentration" class="mt-0 pt-0" />
                <IconTextRow icon="mdi-motion-play-outline" :text="entry.action" v-if="entry.action" class="mt-0 pt-0" />
                <IconTextRow icon="mdi-sleep-off" :text="entry.description" v-if="entry.description" class="mt-0 pt-0" />
                <IconTextRow icon="mdi-pill" :text="entry.medication" v-if="entry.medication" class="mt-0 pt-0"/>
              </div>
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
import IconTextRow from "./../reusable/IconTextRow.vue";
import neuroData from "../data/neuroEntries.js";

const radioButtons = [
  { label: "Alle", value: "all", color: "blue"},
  { label: "Medium", value: "yellow", color: "yellow"},
  { label: "Stark", value: "orange", color: "orange"},
  { label: "Sehr stark", value: "red", color: "red"},
  { label: "Medikament", value: "medication", color:"amber-lighten-1"}
];
const selectedColor = ref("all");

const neuroEntries = ref(neuroData);
const filteredEntries = ref([...neuroEntries.value]);

const convertDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDate(); // Get day without leading zero
  const month = newDate.getMonth() + 1; // Get month (0-11, so add 1)
  return `${day}.${month < 10 ? "0" : ""}${month}`; // Format: D.MM
};

const filterEntries = () => {
  filteredEntries.value = selectedColor.value === "all" ? neuroEntries.value
    : selectedColor.value === "medication" ? neuroEntries.value.filter(entry => entry.medication)
      : neuroEntries.value.filter(entry => entry.intensity === selectedColor.value);
};

const count = computed(() => {
  return filteredEntries.value.length;
});
</script>