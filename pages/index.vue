<template>
  <div class="">
    <fade-transition :duration="2000">
      <Scene1 v-if="sceneLevel === 1" @next="onNext" />
    </fade-transition>
    <fade-transition :duration="2000">
      <Scene2 v-if="sceneLevel === 2" @next="onNext" />
    </fade-transition>
    <fade-transition :duration="2000">
      <Scene3-1 v-if="sceneLevel === 3" @next="onNext" />
    </fade-transition>
    <fade-transition :duration="2000">
      <Scene4-1 v-if="sceneLevel === 4" @next="onNext" />
    </fade-transition>
    <fade-transition :duration="2000">
      <Scene5-1 v-if="sceneLevel === 5" @next="onNext" />
    </fade-transition>
    <fade-transition :duration="2000">
      <Scene6-1 v-if="sceneLevel === 6" @next="onNext" />
    </fade-transition>
    <fade-transition :duration="2000">
      <Scene7-1 v-if="sceneLevel === 7" @next="onNext" />
    </fade-transition>
    <fade-transition :duration="2000">
      <Scene8-1 v-if="sceneLevel === 8" @next="onNext" />
    </fade-transition>
    <fade-transition :duration="2000">
      <Scene9 v-if="sceneLevel === 9" @next="onNext" />
    </fade-transition>
  </div>
</template>

<script>
import sound from '../mixins/sound.js'

export default {
  mixins: [sound],
  data() {
    return {
      sceneLevel: 1,
      soundType: null,
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
