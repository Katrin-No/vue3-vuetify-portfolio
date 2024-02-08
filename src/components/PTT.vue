<template>
  <v-row v-if="item.neuro" class="mt-2 mr-8">
    <v-col cols="12">
      <h3 class="font-weight-bold mb-2 neon-text-brown-lighten-3"> Neuro Diary </h3>
      <v-radio-group inline v-model="selectedColor" @change="filterEntries">
        <v-radio label="Alle" value="all" color="blue"></v-radio>
        <v-radio label="Medium" value="yellow" color="yellow"></v-radio>
        <v-radio label="Stark" value="orange" color="orange"></v-radio>
        <v-radio label="Sehr stark" value="red" color="red"></v-radio>
        <v-radio label="Medikament" value="medication" color="amber-lighten-1"></v-radio>
      </v-radio-group>
      <h2 class="mb-4">Einträge: {{ count }}</h2>
      <div>
        <v-row>
          <v-col v-for="entry in filteredEntries"
            cols="12"
            md="2"
            :key="entry.id"
          >
            <v-card class="d-flex flex-column fill-height" rounded="shaped" :color="entry.intensity" variant="outlined">
              <v-card-item>
                <v-row>
                  <v-col>
                    <div :class="`text-h4 mb-1 font-weight-light neon-text-${color}`">
                      {{ entry.duration }}
                    </div>
                  </v-col>
                  <v-col cols="2" v-if="entry.medication">
                    <v-icon center class="mr-1">mdi-alert-circle-outline</v-icon>
                  </v-col>
                  <v-col cols="4" class="align-self-end">
                    <div class="text-intensity mb-1">
                      {{ entry.date }}
                    </div>
                    <div class="font-weight-light mb-1 text-body-1">
                      {{ entry.gone }}
                    </div>
                  </v-col>
                </v-row>
                <v-divider :color="entry.intensity" :thickness="2" class="mb-1"></v-divider>
                <div class="font-weight-light mb-1 text-body-1">
                  <v-icon class="mr-1">mdi-help-circle-outline</v-icon>
                  {{ entry.reason }}
                </div>
                <div v-if="entry.action && entry.intensity!='blue'" class="text-h6 font-weight-light mb-1 text-body-1">
                  <v-icon class="mr-1">mdi-motion-play-outline</v-icon>
                  {{ entry.action }}
                </div>
                <div v-if="entry.intensity=='blue'" class="text-h6 font-weight-light mb-1 text-body-1">
                  <v-icon class="mr-1"> mdi-sleep-off</v-icon>
                  {{ entry.action }}
                </div>
                <div v-if="entry.medication" class="text-h6 font-weight-light text-body-1">
                  <v-icon class="mr-1">mdi-pill</v-icon>
                  {{ entry.medication }}
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";

// Define the props the component accepts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  item: Object,
});

const selectedColor = ref("all");
const neuroEntries = ref([
  {id: "1", date: "1.02", intensity: "yellow", duration: "1.5h" , reason: "Sitzen, keine Pause, wenig Luft, laut", medication: "Ibu 400", gone: "1h"},
  {id: "2", date: "1.02", intensity: "orange", duration: "1h", reason: "keine Pause", action: "Ruhe, Sport", gone: "1h"},
  {id: "3", date: "2.02", intensity: "red", duration: "2h", reason: "Wenig Luft, zu laut, zu hell (V)", action: "Ruhe, Walk", medication: "Ibu 400", gone: "1.5h"},
  {id: "4", date: "4.02", intensity: "orange", duration: "1.5h", reason: "Sitzen, keine Pause, wenig Luft, laut (V)", action: "Ruhe, Walk", gone: "2h"},
  {id: "5", date: "6.02", intensity: "yellow", duration: "0.5h" , reason: "Sturm, Regen", medication: "Ibu 400", action: "Yoga am Abend", gone: "0.5h"},
  {id: "6", date: "6.02", intensity: "blue", duration: "4h" , reason: "Sturm, Regen", action: "konnte nicht einschlafen", gone: "9pm"},
  {id: "7", date: "7.02", intensity: "orange", duration: "1h", reason: "Arbeit zu kompliziert, 2.5h ohne Pause", action: "Walk", gone: "3pm"},
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