<template>
  <v-row>
    <v-col>
      <div class="mt-2">
        <div class="hex-row" v-for="(row, rowIndex) in sotaRows" :key="rowIndex">
          <div v-for="(skill, columnIndex) in row" :key="columnIndex" class="hexagon-border">
            <div class="hexagon">{{ skill.name }}</div>
          </div>
        </div>
      </div>
    </v-col>
    <v-col class="d-flex align-center">
      <img src="../../public/bee.svg" style="width: 100px; height: 100px;"/>
    </v-col>
  </v-row> 
  <v-icon icon="fa-thin fa-person-swimming"></v-icon>   
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
const sotaRows = [
  [{name: "html css"}, {name: "js ts"}, {name: "node"}], 
  [{name: "hapi"}, {name: "vue"}, {name: "react"}], 
  [{name: "SQL"}, {name: "docker"}, {name: "AWS"}], 
];
</script>
  