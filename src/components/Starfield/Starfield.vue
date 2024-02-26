<template lang="pug">
.wrapper
  canvas(ref="containerRef")
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

<style scoped lang="stylus">
.wrapper
  max-height 100vh
  max-width 100vw
  overflow hidden
  box-sizing content-box
  padding none
  background-color black
  background: url("/galaxy.png") no-repeat;
  background-size: cover;
canavas
  top: 0
  width: 100%
  height: 100%
  animation: fadeIn forwards linear 300ms

@keyframes fadeIn
  from
    opacity 0
  to
    opacity 1

.background
  //position: absolute
  //left: -35%;
  //right: -35%;
  //top: -35%;
  //bottom: -35%;
  //animation-name: spin;
  //animation-duration: 500s;
  //animation-iteration-count: infinite;
  //animation-timing-function: linear;
  //z-index -1

@keyframes spin
  from
    transform: rotate(-0deg)
  to
    transform: rotate(-360deg)
</style>