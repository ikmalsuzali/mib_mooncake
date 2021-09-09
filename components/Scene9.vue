<template>
  <div class="overlay grid bg-picture">
    <div class="fixed w-full bg-opacity-50">
      <div
        class="
          px-10
          mx-auto
          my-5
          md:px-80
          py-4
          bg-gray-200 bg-opacity-60
          flex-wrap flex
          text-black
        "
      >
        <div class="w-full lg:w-8/12 text-md text-center lg:text-2xl pb-4">
          {{ scene2Text }}
        </div>
        <div class="w-full lg:w-2/12 hidden lg:block">
          <img
            src="../assets/images/arrow_ic.png"
            class="mt-4 w-10 lg:w-15 m-auto hover:shadow-2xl"
          />
        </div>
        <div class="w-full lg:w-2/12">
          <img
            @click="onClickInstagram"
            src="../assets/images/instagram_ic.png"
            class="w-10 lg:w-20 m-auto lg:mr-auto hover:shadow-2xl"
          />
        </div>
      </div>
      <div class="m-auto relative w-full sm:w-4/12">
        <img
          @click="onClickImg"
          src="../assets/images/mooncake_scene_9.png"
          class="m-auto hover:shadow-2xl"
        />
        <div class="bottom-0 absolute w-full">
          <div class="text-center bg-gray-200 bg-opacity-70">
            <div>Click here checkout our Mooncakes!</div>
          </div>
          <div class="text-center">
            <button
              @click="onClickImg"
              class="bg-yellow-500 hover:bg-yellow-400 p-2 text-white w-full"
            >
              <div>
                <span> Purchase Mooncakes </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 w-full">
      <button
        class="
          flex
          ml-auto
          text-sm
          md:text-md
          font-bold
          bg-yellow-500
          hover:bg-yellow-400
          p-3
          rounded-xl
          text-black
          my-4
          mx-4
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
  methods: {
    onClickImg() {
      window.open('https://www.mib.edu.my/mooncake-2021/', '_blank')
    },
    onClickInstagram() {
      window.open('https://www.instagram.com/mibcollege/', '_blank')
    },
  },
}
</script>

<style scoped>
.bg-picture {
  background-color: #eeeeee;
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
