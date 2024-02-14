<template>
  <h3 class="font-weight-bold mb-2 neon-text-brown-lighten-3"> TODOs </h3>
  <v-row class="mr-8">
    <v-col cols="6">
      <v-row>
        <v-col>
          <p class="text-h6 mb-3 font-weight-light">Refactor:</p>
          <div class="ptt-card-body">
            <IconTextRow icon="mdi-image-multiple-outline" text="folders" />
            <IconTextRow icon="mdi-code-block-braces" text="css colors" />
            <IconTextRow icon="mdi-code-block-tags" text="card full width" />
          </div>
        </v-col>
        <v-col>
          <p class="text-h6 mb-3 font-weight-light">Overall:</p>
          <div class="ptt-card-body">
            <IconTextRow icon="mdi-code-block-tags" text="responsive" />
            <!-- <IconTextRow icon="mdi-code-block-parentheses" /> -->
            <IconTextRow icon="mdi-code-block-braces" text="neon borders" />
            <IconTextRow icon="mdi-database-check-outline" text="Mongo" />
            <IconTextRow icon="mdi-cloud-check-outline" text="Netlify" />
          </div>
        </v-col>
        <v-col>
          <p class="text-h6 mb-3 font-weight-light">Pages:</p>
          <div class="ptt-card-body">
            <IconTextRow icon="mdi-timeline-text-outline" text="header" />
            <IconTextRow icon="mdi-hexagon-multiple-outline" text="header" />
            <IconTextRow icon="mdi-calendar-outline" text="start time" />
            <IconTextRow icon="mdi-chef-hat" text="Routes" />
          </div>
        </v-col>
        <v-col>
          <p class="text-h6 mb-3 font-weight-light">Another:</p>
          <div class="ptt-card-body">
            <IconTextRow icon="mdi-code-block-braces" text="regex" />
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import IconTextRow from "./../reusable/IconTextRow.vue";
</script>