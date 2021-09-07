<template>
  <div class="overlay grid bg-picture">
    <div class="container mx-auto px-5 lg:px-10 py-8">
      <div class="grid text-white">
        <div class="text-md md:text-2xl pb-4">
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
              @click="$emit('next', 7)"
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
      scene3TextPart1: `Chang'E soon discovered about her husband's gift and began scheming her plan to go back to heaven. One night, she found the elixir hidden under their bed. Chang'E then drank every last drop of the elixir. Hou Yi, realizing that his wife was nowhere to be found ran outside to find Chang'E drifting into the night sky.`,
    }
  },
  methods: {},
}
</script>

<style scoped>
.bg-picture {
  background: url(~/assets/mobiles/mooncake_scene_6.jpg) no-repeat center center;
  background-size: cover;
  overflow: hidden;
}

@media only screen and (min-width: 600px) {
  .bg-picture {
    background: url(~/assets/images/mooncake_scene_6.jpeg) no-repeat center
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
</style>
