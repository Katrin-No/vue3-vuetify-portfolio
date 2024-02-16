<template>
  <div class="neon-corner">
    <div class="neon-h-line-g"></div>
    <div class="neon-h-line-b"></div>
    <div class="neon-v-line-g"></div>
    <div class="neon-v-line-b"></div>
  </div>
</template>

<style scoped>
.neon-corner {
  position: relative;
  /* overflow: hidden; */
}
.neon-corner::before {
  content: '';
  position: absolute;
  top: -25px;
  right: -20px;
  bottom: 16px;
  left: -20px;
  background-color: transparent;
  border-radius: 10px;
} 
.neon-h-line-g, .neon-h-line-b, .neon-v-line-g, .neon-v-line-b {
  position: absolute;
  background-color: #fff;
}
.neon-h-line-b, .neon-v-line-b, .neon-corner::before {
  box-shadow: 
    0 0 10px #00ffea, 
    0 0 20px #00ffea, 
    0 0 40px #00ffea, 
    0 0 80px #00ffea;
}
.neon-h-line-b {
  top: 10px;
  right: -8px;
  width: 30vw;
  height: 5px;
}
.neon-v-line-b {
  top: -12px;
  right: 25px;
  width: 2px;
  height: 20vw;
}
.neon-h-line-g, .neon-v-line-g {
  box-shadow: 
    0 0 8px #0f0, 
    0 0 20px #0f0, 
    0 0 40px #0f0;
}
.neon-h-line-g {
  top: 0;
  right: 0;
  width: 30vw; 
  height: 2px;
}
.neon-v-line-g {
  top: 0;
  right: 0;
  width: 5px;
  height: 20vw;
}
</style>