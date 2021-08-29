<template>
  <div class="overlay grid bg-blue-600">
    <div class="m-auto text-9xl">Chang'E Myth</div>
    <div class="m-auto">
      <button
        class="text-xl font-bold bg-yellow-500 p-5 rounded-xl"
        @click="$emit('next', 2)"
      >
        (Please click here to start the story)
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
