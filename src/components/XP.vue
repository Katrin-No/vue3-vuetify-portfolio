<template>
  <TimeLine :dots="projects" />
  <TimeLine :dots="educationWork" />
</template>
  
<script setup>
import TimeLine from "./../reusable/TimeLine.vue";

const projects = [
  { id: 1, color: "blue-accent-1", date: "2022 - now", title: "CoMS", text: "Consent Management (node, ts, react)"},
  { id: 2, color: "cyan-accent-2", date: "2019 - 2022", title: "O2 Online Shop", text: "Contract Termination Tool (Vue3, ts)"},
  { id: 3, color: "green-accent-2", date: "2020 - 2021", title: "ILC", text: "DSL Move & Vertragsverlängerung (Vue2, js)"},
  { id: 4, color: "deep-purple-accent-1", date: "2019 - 2020", title: "PTT", text: "Projectmanagement Applikation (Ruby)"},
];

const educationWork = [
  { id: 1, color: "blue-accent-1", date: "2022 - now", title: "Junior Software Engineer", text: "Telefónica Germany GmbH & Co. OHG  "},
  { id: 2, color: "deep-purple-accent-1", date: "2019 - 2022", title: "Azubi Fachinformatik Anwendungsentwicklung", text: "Telefónica Germany GmbH & Co. OHG  "},
  { id: 3, color: "cyan-accent-3", date: "2015 - 2019", title: "Student Linguistik", text: "Universität"},
  { id: 4, color: "teal-accent-3", date: "2004 - 2015", title: "Schüler", text: "Gymnasium"},
];
</script>
  