<template>
  <v-app>
    <!-- Header -->
    <v-app-bar app dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Resume</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon="true">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Main Layout -->
    <v-row no-gutters class="flex-row-reverse">
      <!-- Main Content Area -->
      <v-col cols="10">
        <v-main>
          <v-container fluid>
            <h1>Hallo Welt</h1>
          </v-container>
        </v-main>
      </v-col>
      <!-- Navigation -->
      <v-col cols="2">
        <NavigationPage> </NavigationPage>
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup lang="ts">
import NavigationPage from "./components/NavigationPage.vue";
</script>

<style>
.flex-row-reverse {
  display: flex;
  flex-direction: row-reverse;
}
</style>
