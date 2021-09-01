<template>
  <div class="overlay grid bg-picture">
    <div class="fixed bottom-0 w-full bg-gray-800 bg-opacity-50">
      <div class="container mx-auto px-5 lg:px-40 py-8">
        <div class="grid text-white">
          <div class="text-md lg:text-2xl pb-4">
            {{ sceneText }}
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
            @click="$emit('next', 8)"
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
      sceneText: `In the hopes that it might make Chang’e feel less alone (and to show that he was no longer mad at her), Hou Yi started leaving her favorite desserts and fruits out every night. He continued this practice until the day he died.`,
    }
  },
}
</script>

<style scoped>
.bg-picture {
  background: url(~/assets/images/mooncake_scene_7.jpeg) no-repeat center center;
  background-size: cover;
  overflow: hidden;
}
</style>
