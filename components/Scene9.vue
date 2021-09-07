<template>
  <div class="overlay grid bg-picture">
    <div class="fixed w-full bg-opacity-50">
      <div class="px-20 mx-auto lg:px-40 py-4 bg-gray-200 bg-opacity-60">
        <div class="grid text-black">
          <div class="text-md lg:text-2xl pb-4">
            {{ scene2Text }}
          </div>
        </div>
      </div>
      <button
        class="
          flex
          m-auto
          text-sm
          md:text-md
          font-bold
          bg-yellow-500
          hover:bg-yellow-400
          p-3
          rounded-xl
          text-black
          mb-4
        "
        @click="$emit('next', 1)"
      >
        <div class="blink">
          <span>Restart the story</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scene2Text: `At MIB we have a passion for sharing everything we know about food. We hope you've enjoyed our first interactive story, please let us know what you think!`,
    }
  },
}
</script>

<style scoped>
.bg-picture {
  background: url(~/assets/images/mooncake_scene_9.png) no-repeat center center;
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
