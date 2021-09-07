<template>
  <div class="overlay grid bg-picture">
    <div class="container mx-auto px-5 lg:px-10 py-8">
      <div class="grid text-black">
        <div class="text-md lg:text-2xl pb-4">
          {{ sceneTextPart1 }}
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 w-full bg-opacity-70">
      <div class="container mx-auto px-5 lg:px-20 py-8">
        <div class="grid text-black">
          <div class="text:sm md:text-xl mb-1">
            What do you think happens next?
          </div>
          <div class="flex">
            <button
              :class="animated1 ? 'shake bg-red-400' : 'bg-transparent'"
              class="
                mx-2
                w-4/12
                flex
                text-xs
                md:text-md
                font-bold
                border-2 border-white
                active:bg-red-400
                p-3
                text-black
              "
              @click="onErrorClick1"
            >
              <div class="m-auto">
                Hou Yi & Chang’E lived happily ever after
              </div>
            </button>
            <button
              :class="animated2 ? 'shake bg-red-400' : 'bg-transparent'"
              class="
                mx-2
                w-4/12
                flex
                text-xs
                md:text-md
                font-bold
                border-2 border-white
                active:bg-red-400
                p-3
                text-black
              "
              @click="onErrorClick2"
            >
              <div class="m-auto">
                Hou Yi decides to give Chang’E the elixir anyway
              </div>
            </button>
            <button
              class="
                mx-2
                w-4/12
                flex
                text-xs
                md:text-md
                font-bold
                border-2 border-white
                active:bg-green-400
                p-3
                text-black
              "
              @click="onNextClick"
            >
              <div class="m-auto">
                Chang’E found the elixir underneath the bed and decides to drink
                it
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sound from '../mixins/sound.js'

export default {
  mixins: [sound],
  data() {
    return {
      partType: 1,
      sceneTextPart1: `While Hou Yi was grateful for the gift, he was conflicted as the elixir he has is only enough for one person. Hou Yi did not wish to be immortal if he couldn’t spend eternity with his wife, Chang’E. Hou Yi took the elixir and hid in under his bed.`,
      animated1: false,
      animated2: false,
    }
  },
  methods: {
    onErrorClick1() {
      this.animated1 = true
      this.onPlay('wrong_2')
      setTimeout(() => {
        this.animated1 = false
      }, 1000)
    },
    onErrorClick2() {
      this.animated2 = true
      this.onPlay('wrong_2')
      setTimeout(() => {
        this.animated2 = false
      }, 1000)
    },
    onNextClick() {
      this.onPlay('right_2')
      this.$emit('next', 6)
    },
  },
}
</script>

<style scoped>
.bg-picture {
  background: url(~/assets/mobiles/mooncake_scene_5.jpg) no-repeat center center;
  background-size: cover;
  overflow: hidden;
}

@media only screen and (min-width: 600px) {
  .bg-picture {
    background: url(~/assets/images/mooncake_scene_5.jpeg) no-repeat center
      center;
    background-size: cover;
    overflow: hidden;
  }
}

.blink {
  /* background-color: magenta; */
  text-align: center;
}
span {
  color: white;
  animation: blink 1.5s linear infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
