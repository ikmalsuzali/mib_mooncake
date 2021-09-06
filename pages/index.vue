<template>
  <div @click="onClick">
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
    <audio id="player" ref="player" autoplay allow="autoplay" loop>
      <source :src="bgSound1" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
import sound from '../mixins/sound.js'
import bgSound1 from '../assets/sounds/bg_sound_1.mp3'
import bgSound2 from '../assets/sounds/bg_sound_2.mp3'

export default {
  mixins: [sound],
  data() {
    return {
      sceneLevel: 8,
      soundType: null,
      backgroundMusicPromise1: null,
      backgroundMusicPromise2: null,
      bgSound1,
      bgSound2,
    }
  },
  watch: {
    sceneLevel(newValue) {
      if (newValue === 1) {
        this.$refs.player.src = bgSound1
        const promise = this.$refs.player.play()
        if (promise !== undefined) {
          promise
            .then(() => {
              this.$refs.player.play()
            })
            .catch((error) => {
              console.log(error)
            })
        }
      } else if (newValue === 6) {
        this.$refs.player.src = bgSound2
        this.$refs.player.play()
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      const promise = document.getElementById('player').play()
      if (promise !== undefined) {
        promise
          .then(() => {
            this.$refs.player.play()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  },
  methods: {
    onNext(event) {
      this.sceneLevel = event
    },
    onClick() {
      this.$refs.player.play()
    },
  },
}
</script>

<style></style>
