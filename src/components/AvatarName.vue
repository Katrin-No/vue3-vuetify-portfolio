<template>
  <NeonCorner/>
  <v-row>
    <v-col>
      <ImageCard image="cyber-ava.jpeg" size="160" class="neon-border mt-8" />
      <h1
        class="font-weight-bold mt-9 neon-green" 
        style="font-family: fantasy;">
        Katrin
      </h1>
    </v-col>
    <v-col><v-img src="welcome.PNG" width="180" /> </v-col>
  </v-row>
</template>

<style scoped>
.neon-green{
  color: #ffffffab;
   text-shadow: 
    0 0 5px #87f99a8c, 
    0 0 8px #46b640cc, 
    0 0 14px #37efa4, 
    0 0 28px #3ca8829e; 
}
.neon-blue{
  color: #ffffffab;
  text-shadow: 
  0 0 5px rgb(135 249 255 / 55%), 
  0 0 12px rgb(70 171 255 / 80%), 
  0 0 20px rgb(14 50 111), 
  0 0 30px rgb(60 69 255 / 62%);
}
/* .neon-border {
  border: 1px solid #614075db;
  box-shadow: rgb(98 0 204 / 57%) 0px 0px 40px;
} */
</style>

<script setup>
import ImageCard from "./../reusable/ImageCard.vue";
import NeonCorner from "./../reusable/NeonCorner.vue";
</script>