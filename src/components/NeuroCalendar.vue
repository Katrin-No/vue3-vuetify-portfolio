<template>
  <div>
    <!-- <v-sheet
      tile
      height="54"
      class="d-flex"
    >
      <v-select
        v-model="type"
        :items="types"
        dense
        variant="outlined"
        hide-details
        class="ma-2"
        label="View Mode"
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        dense
        variant="outlined"
        hide-details
        label="weekdays"
        class="ma-2"
      ></v-select>
    </v-sheet> -->
    <v-sheet>
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :view-mode="type"
        :events="events"
        class="w-75"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<style>
/* overwrite vuetify styles for calendar */
/* geht nur ohne scoped */
.v-calendar-weekly__day-alldayevents-container {
  min-height: 0px !important;
}
.v-calendar-month__days > .v-calendar-month__day {
  min-height: 120px !important;
}
.v-chip.v-chip--size-default {
  margin-bottom: 10px !important;
  margin-left: 10px !important;
  /* cursor: pointer */
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { useDate } from "vuetify";
import neuroData from "../data/neuroEntries.js";

const type = ref("month");
// const types = ref(["month", "week", "day"]);
const weekday = ref([1, 2, 3, 4, 5, 6, 0]);
// const weekdays = ref([
//   { title: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
//   { title: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
//   { title: "Mon - Fri", value: [1, 2, 3, 4, 5] },
//   { title: "Mon, Wed, Fri", value: [1, 3, 5] },
// ]);
const value = ref([new Date()]);
const events = ref([]);

onMounted(() => {
  const adapter = useDate();
  fetchEvents({ start: adapter.startOfDay(adapter.startOfMonth(new Date())), end: adapter.endOfDay(adapter.endOfMonth(new Date())) });
});

const neuroEntries = ref(neuroData); 

function fetchEvents() {
  events.value = neuroEntries.value.map((entry) => {
    return {
      title: `${entry.time}: ${entry.duration}`,
      start: new Date(entry.date),
      end: new Date(entry.date),
      color: entry.intensity,
      details: entry.action,
    };
  });
}
</script>