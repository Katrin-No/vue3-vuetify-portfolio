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
                  <div class="text-intensity mb-1"> {{ entry.date }} </div>
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

const radioButtons = [
  { label: "Alle", value: "all", color: "blue"},
  { label: "Medium", value: "yellow", color: "yellow"},
  { label: "Stark", value: "orange", color: "orange"},
  { label: "Sehr stark", value: "red", color: "red"},
  { label: "Medikament", value: "medication", color:"amber-lighten-1"}
];
const selectedColor = ref("all");
const neuroEntries = ref([
  {id: "1", date: "2.02", intensity: "red", duration: "2h", reason: "Wenig Luft, zu laut, zu hell (V)", action: "Ruhe, Walk", gone: "1.5h"},
  {id: "2", date: "4.02", intensity: "orange", duration: "1.5h", reason: "Sitzen, keine Pause, wenig Luft, laut (V)", action: "Ruhe, Walk", gone: "2h"},
  {id: "3", date: "6.02", intensity: "yellow", duration: "0.5h" , reason: "Sturm, Regen", medication: "Ibu 400", action: "Yoga am Abend", gone: "0.5h"},
  {id: "4", date: "6.02", intensity: "blue", duration: "4h" , reason: "Sturm, Regen", description: "konnte nicht einschlafen", gone: "9pm"},
  {id: "5", date: "7.02", intensity: "orange", duration: "1h", reason: "Arbeit zu kompliziert, 2.5h ohne Pause", action: "Walk", gone: "3pm"},
  {id: "6", date: "9.02", intensity: "blue", duration: "4h", reason: "Sturm, Regen", description: "konnte nicht einschlafen", gone: "9pm"},
  {id: "7", date: "10.02", intensity: "orange", duration: "3h", reason: "Nebel, Wolken", action: "Walk", medication: "Ibu 400", gone: "9am"},
  {id: "8", date: "13.02", intensity: "yellow", duration: "1h", reason: "Laut", action: "Ruhe, Walk", gone: "0.5h"},
  {id: "9", date: "14.02", intensity: "yellow", duration: "2.5h", reason: "Nebel, Regen", noConcentration: true, action: "Ruhe, !work", gone: "8am"},
]);
const filteredEntries = ref([...neuroEntries.value]);

const filterEntries = () => {
  filteredEntries.value = selectedColor.value === "all" ? neuroEntries.value
    : selectedColor.value === "medication" ? neuroEntries.value.filter(entry => entry.medication)
      : neuroEntries.value.filter(entry => entry.intensity === selectedColor.value);
};

const count = computed(() => {
  return filteredEntries.value.length;
});
</script>