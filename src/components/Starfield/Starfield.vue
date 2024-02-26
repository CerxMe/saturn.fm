<template lang="pug">
 canvas.wrapper(ref="containerRef")

</template>

<script setup>
import { ref, onMounted } from 'vue'
import StarfieldScene from './scene.ts'
const  containerRef = ref()

onMounted(() => {
  const scene = new StarfieldScene(containerRef.value)
  console.log(scene)
  scene?.toggleSpaceShipVisbility(true);
})
</script>


<style scoped>
.wrapper {
  //opacity: 0;
  top: 0;
  width: 100%;
  height: 100%;
  //z-index: -2;
}
.fadeIn {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  @media (prefers-reduced-motion) {
    animation-delay: 5s;
    animation-duration: 10s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}
</style>