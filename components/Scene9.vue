<template>
  <div class="overlay grid bg-picture">
    <div class="fixed w-full bg-opacity-50">
      <div class="px-20 mx-auto md:px-80 py-4 bg-gray-200 bg-opacity-60">
        <div class="grid text-black">
          <div class="text-md text-center lg:text-2xl pb-4">
            {{ scene2Text }}
          </div>
          <img
            src="../assets/images/instagram_ic.png"
            class="w-20 m-auto hover:shadow-2xl"
          />
        </div>
      </div>
      <img
        @click="onClickImg"
        src="../assets/images/mooncake_scene_9.png"
        class="w-5/12 m-auto hover:shadow-2xl"
      />
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
          my-4
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
      window.location.href = 'https://www.mib.edu.my/mooncake-2021/'
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
