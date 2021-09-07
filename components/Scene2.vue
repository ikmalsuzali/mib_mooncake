<template>
  <div class="overlay grid bg-picture">
    <div class="fixed bottom-0 w-full bg-opacity-50">
      <div class="container mx-auto px-5 lg:px-40 py-8">
        <div class="grid text-white">
          <div class="text-sm lg:text-2xl pb-4">
            {{ scene2Text }}
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
            @click="$emit('next', 3)"
          >
            <div class="blink">
              <span>Next</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scene2Text: `A long time ago Chang'E (嫦娥), a beautiful young girl who worked for the Jade Emperor in heaven, was banished to live on earth. There, Chang'E met a young hunter named Hou Yi (后羿) and fell in love. Chang'E who lived a prosperous life discovered that Hou Yi was poor. Despite her love for Hou Yi, she wanted to go back to heaven...`,
    }
  },
}
</script>

<style scoped>
.bg-picture {
  background: url(~/assets/mobiles/mooncake_scene_2.jpg) no-repeat center center;
  background-size: cover;
  overflow: hidden;
}

@media only screen and (min-width: 600px) {
  .bg-picture {
    background: url(~/assets/images/mooncake_scene_2.jpeg) no-repeat center
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
