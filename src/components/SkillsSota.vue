<template>
  <v-row>
    <v-col><SotaRows :sotaRows="hardSkills"/></v-col>
    <v-col class="d-flex align-center">
      <img src="../../public/bee.svg" style="width: 100px; height: 100px;"/>
    </v-col>
  </v-row> 
  <SotaRows :sotaRows="softSkills"/>
</template>

<script setup>
import SotaRows from "./../reusable/SotaRows.vue";

const hardSkills = [
  [{name: "html css"}, {name: "js ts"}, {name: "node"}], 
  [{name: "hapi"}, {name: "vue"}, {name: "react"}], 
  [{name: "SQL"}, {name: "docker"}, {name: "AWS"}], 
];
const softSkills = [
  [{name: "communication"}, {name: "teamwork"}, {name: "adaptability"}],
  [{name: "time management"}, {name: "creativity"}, {name: "self organization"}],
  [{name: "empathy"}, {name: "analytical thinking"}, {name: "stress management"}],
];
</script>
  