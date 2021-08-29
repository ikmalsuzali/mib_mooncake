<template>
  <div class="">
    <Scene1 v-if="sceneLevel === 1" @next="onNext" />
    <Scene2 v-if="sceneLevel === 2" @next="onNext" />
    <Scene3 v-if="sceneLevel === 3" @next="onNext" />
    <Scene4 v-if="sceneLevel === 4" @next="onNext" />
    <Scene5 v-if="sceneLevel === 5" @next="onNext" />
    <Scene6 v-if="sceneLevel === 6" @next="onNext" />
    <Scene7 v-if="sceneLevel === 7" @next="onNext" />
    <Scene8 v-if="sceneLevel === 8" @next="onNext" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      sceneLevel: 1,
    }
  },
  methods: {
    onNext(event) {
      this.sceneLevel = event
    },
  },
}
</script>

<style></style>
