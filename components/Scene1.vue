<template>
  <div class="overlay grid bg-picture">
    <div class="fixed bottom-0 w-full bg-opacity-50">
      <div class="container mx-auto px-5 lg:px-40 py-8">
        <div class="grid text-white">
          <div class="m-auto text-2xl md:text-5xl text-center mb-4 md:mb-8">
            The Origins of Mooncakes: Legend of Chang'E (嫦娥)
            <div class="text-xs">
              *this story is passed downn for generations, this is our version
              of the story
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
            "
            @click="$emit('next', 2)"
          >
            <div class="blink">
              <span class="m-auto">(Please click here to start the story)</span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="m-auto text-9xl relative" style="top: 9%">Chang'E Myth</div>
    <div class="m-auto">
      <button
        class="text-xl font-bold bg-yellow-500 p-5 rounded-xl"
        @click="$emit('next', 2)"
      >
        (Please click here to start the story)
      </button>
    </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.bg-picture {
  background: url(~/assets/mobiles/mooncake_scene_2.gif) no-repeat center center;
  background-size: cover;
  overflow: hidden;
}

@media only screen and (min-width: 600px) {
  .bg-picture {
    background: url(~/assets/images/mooncake_scene_2.gif) no-repeat center
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
