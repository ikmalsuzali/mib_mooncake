<template>
  <div class="overlay grid bg-picture">
    <div class="mx-auto lg:px-10 py-8">
      <div class="grid text-white">
        <div class="text-xs sm:text-2xl p-4 bg-gray-200 bg-opacity-20">
          {{ scene3TextPart1 }}
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 w-full bg-opacity-70">
      <div class="container mx-auto px-5 lg:px-40 py-8">
        <div class="grid text-white">
          <div class="flex">
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
              "
              @click="$emit('next', 4)"
            >
              <div class="blink">
                <span>Next</span>
              </div>
            </button>
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
      partType: 1,
      scene3TextPart1: `When the earth was still young, there were ten suns in the sky. It was extremely hot all the time and there was no such thing as night. The extreme heat made it hard to farm crops and endangered entire populations. One day, a skilled archer named Hou Yi (后羿) decided that enough was enough. He raised his bow to the heavens and shot down nine of the ten suns.`,
    }
  },
  methods: {},
}
</script>

<style scoped>
.bg-picture {
  background: url(~/assets/images/mooncake_scene_3.jpeg) no-repeat center center;
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
