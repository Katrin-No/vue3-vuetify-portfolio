<template>
  <div class="mt-2">
    <div class="hex-row" v-for="(row, rowIndex) in sotaRows" :key="rowIndex">
      <div v-for="(skill, columnIndex) in row" :key="columnIndex" class="hexagon-border">
        <div class="hexagon">{{ skill.name }}</div>
      </div>
    </div>
  </div>
</template>
  
<style lang="scss">
.hex-row {
  display: flex;
  justify-content: center; // auskommentieren
  // Targeting the odd rows
  &:nth-child(odd) {
    margin-left: 109px; // 55px
    margin-top: -30px;
  }
  // Targeting even rows
  &:nth-child(2n) {
    margin-top: -30px;
  }
  // Styling for the first child
  &:first-child {
    margin-top: 3px;
  }
}
  
  .hexagon-border {
    width: 106px; // Width including border
    height: 121px; // Height including border
    background-color: chartreuse; // Border color
    color: chartreuse;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
      &:hover {
        color: #fff;
      }
  
    .hexagon {
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      width: 104px;
      height: 119px;
      background-color: #242424; // Background color of the hexagon
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      &:hover {
        background-color: #56800e;
      }
    }
  } 
</style>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  sotaRows: Object,
});
</script>