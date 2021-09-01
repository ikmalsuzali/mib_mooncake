<template>
  <div class="overlay grid bg-picture">
    <div class="fixed bottom-0 w-full bg-gray-800 bg-opacity-50">
      <div class="container mx-auto px-5 lg:px-40 py-8">
        <div class="grid text-white">
          <div class="text-md lg:text-2xl pb-4">
            {{ scene2Text }}
          </div>
          <button
            class="
              text-xl
              font-bold
              bg-yellow-500
              hover:bg-yellow-400
              p-5
              rounded-xl
              text-black
            "
            @click="$emit('next', 3)"
          >
            Next
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
      scene2Text: `Long long time ago, Chang’E and Hou Yi fall in love and get married.
            Then, Chang’E live with Hou Yi with his family. Chang’E found out
            that Hou Yi live a poor life that is totally different from her. She
            wanted to go back home…`,
    }
  },
}
</script>

<style scoped>
.bg-picture {
  background: url(~/assets/images/mooncake_scene_2.jpeg) no-repeat center center;
  background-size: cover;
  overflow: hidden;
}
</style>
