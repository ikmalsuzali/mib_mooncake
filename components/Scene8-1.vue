<template>
  <div class="overlay grid bg-picture">
    <div class="container mx-auto px-5 lg:px-10 py-8">
      <div class="grid text-black">
        <div class="text-md lg:text-xl pb-4">
          {{ scene3TextPart1 }}
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 w-full bg-opacity-70">
      <div class="container mx-auto px-5 lg:px-40 py-8">
        <div class="grid text-white">
          <div>
            *this story is based on a chinese myth with many different
            renditions
          </div>
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
              @click="$emit('next', 1)"
            >
              <div class="blink">
                <span>Restart the story</span>
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
      scene3TextPart1: `In the hopes that it might make Chang’e feel less alone (and to show that he was no longer mad at her), Hou Yi started leaving her favorite desserts and fruits out every night. He continued this practice until the day he died.`,
    }
  },
  methods: {},
}
</script>

<style scoped>
.bg-picture {
  background: url(~/assets/images/mooncake_scene_8.jpeg) no-repeat center center;
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
