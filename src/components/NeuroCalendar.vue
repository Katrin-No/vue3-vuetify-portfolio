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
        class="w-50"
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
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { useDate } from "vuetify";

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

const neuroEntries = ref([
  {id: "1", date: "2024-02-02", intensity: "red", duration: "2h", reason: "Wenig Luft, zu laut, zu hell (V)", action: "Ruhe, Walk", gone: "1.5h"},
  {id: "2", date: "2024-02-04", intensity: "orange", duration: "1.5h", reason: "Sitzen, keine Pause, wenig Luft, laut (V)", action: "Ruhe, Walk", gone: "2h"},
  {id: "3", date: "2024-02-06", intensity: "yellow", duration: "0.5h" , reason: "Sturm, Regen", medication: "Ibu 400", action: "Yoga am Abend", gone: "0.5h"},
  {id: "4", date: "2024-02-06", intensity: "blue", duration: "4h" , reason: "Sturm, Regen", description: "konnte nicht einschlafen", gone: "9pm"},
  {id: "5", date: "2024-02-07", intensity: "orange", duration: "1h", reason: "Arbeit zu kompliziert, 2.5h ohne Pause", action: "Walk", gone: "3pm"},
  {id: "6", date: "2024-02-09", intensity: "blue", duration: "4h", reason: "Sturm, Regen", description: "konnte nicht einschlafen", gone: "9pm"},
  {id: "7", date: "2024-02-10", intensity: "orange", duration: "3h", reason: "Nebel, Wolken", action: "Walk", medication: "Ibu 400", gone: "9am"},
  {id: "8", date: "2024-02-13", intensity: "yellow", duration: "1h", reason: "Laut", action: "Ruhe, Walk", gone: "0.5h"},
  {id: "9", date: "2024-02-14", intensity: "yellow", duration: "2h", reason: "Nebel, Wolken, x Konzentration", action: "Ruhe", gone: "?"},

]);
function fetchEvents() {
  events.value = neuroEntries.value.map((entry) => {
    return {
      title: entry.duration,
      start: new Date(entry.date),
      end: new Date(entry.date),
      color: entry.intensity,
      details: entry.action,
    };
  });
}
</script>