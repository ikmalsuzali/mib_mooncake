<template>
  <div class="overlay grid bg-picture">
    <div class="fixed bottom-0 w-full bg-opacity-50">
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
      <div class="px-5 mx-auto lg:px-40 py-8 bg-gray-200 bg-opacity-40">
        <div class="grid text-black">
          <div class="text-md lg:text-2xl pb-4">
            {{ scene2Text }}
          </div>
          <div class="text-xs ml-auto">
            Disclaimer: This is just a myth, one of their versions
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scene2Text: `This tradition continues today, as many people leave annual offerings to Chang’e during the Mid-Autumn Festival.`,
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
