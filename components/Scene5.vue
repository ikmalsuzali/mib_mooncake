<template>
  <div class="overlay grid bg-picture">
    <div class="fixed bottom-0 w-full bg-gray-800 bg-opacity-50">
      <div class="container mx-auto px-5 lg:px-40 py-8">
        <div class="grid text-white">
          <div class="text-md lg:text-2xl pb-4">
            {{ scene5Text }}
          </div>
          <button
            class="
              text-xl
              font-bold
              bg-yellow-500
              hover:bg-yellow-400
              p-5
              rounded-xl
              text-black
            "
            @click="$emit('next', 6)"
          >
            Next
          </button>
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
      scene5Text: `Chang'e soon discovered her husband’s gift and began to devise a plan. That night, she found the elixir under their bed and drank every last drop. Realizing that his wife was not in bed with him, Hou Yi ran outside to find her drifting into the night sky.`,
    }
  },
}
</script>

<style scoped>
.bg-picture {
  background: url(~/assets/images/mooncake_scene_5.jpeg) no-repeat center center;
  background-size: cover;
  overflow: hidden;
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
</style>
