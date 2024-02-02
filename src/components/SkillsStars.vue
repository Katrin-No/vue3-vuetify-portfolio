<template>
    <div v-if="item.skills" class="mt-2">
      <v-row>
        <v-col v-for="skill in tecSkills" :key="skill.name" cols="6">
          <div>
            <h2 class="mt-n1 headline font-weight-light">{{ skill.name }}</h2>
            <v-rating
              :length="5"
              :size="31"
              :model-value="skill.value"
              active-color="warning"
              half-increments
              readonly
            />
          </div>
        </v-col>
      </v-row>
    </div>
</template>
  
<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  item: Object
});

const tecSkills = [
  {name: "html", value: "4"}, 
  {name: "css", value: "3.5"}, 
  {name: "js", value: "4"}, 
  {name: "ts", value: "3.5"}, 
  {name: "node", value: "3"},
  {name: "vue", value: "5"},
  {name: "vuetify", value: "4.5"},
  {name: "react", value: "3.5"},
  {name: "ruby", value: "4.5"},
]; 
</script>
  