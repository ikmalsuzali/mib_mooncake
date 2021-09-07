<template>
  <div class="overlay grid bg-picture">
    <div class="mx-auto lg:px-10 py-8">
      <div class="grid text-white">
        <div class="text-md sm:text-2xl p-4 bg-gray-200 bg-opacity-20">
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
      scene3TextPart1: `One day, something strange happened. Ten suns arose in the sky, blazing the earth. Hou Yi who was a skilled archer then stepped up. Raising his bow to the heavens, Hou Yi shot nine of the ten suns down, becoming an instant hero.`,
    }
  },
  methods: {},
}
</script>

<style scoped>
.bg-picture {
  background: url(~/assets/mobiles/mooncake_scene_3.jpg) no-repeat center center;
  background-size: cover;
  overflow: hidden;
}

@media only screen and (min-width: 600px) {
  .bg-picture {
    background: url(~/assets/images/mooncake_scene_3.jpeg) no-repeat center
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
