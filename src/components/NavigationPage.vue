<template>
  <v-navigation-drawer permanent fixed app>
    <v-list-item title="Navigations"> </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :title="item.title"
        :prepend-icon="item.icon"
      ></v-list-item>
    </v-list>
    <v-list-item></v-list-item>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const navigationItems = [
  { title: "Home", icon: "mdi-home" },
  { title: "About", icon: "mdi-information" },
  { title: "Contact", icon: "mdi-email" },
];
</script>
