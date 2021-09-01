<template>
  <div class="overlay grid bg-picture">
    <div class="fixed bottom-0 w-full bg-gray-800 bg-opacity-70">
      <div class="container mx-auto px-5 lg:px-40 py-8">
        <div class="grid text-white">
          <div v-if="partType === 1" class="text-md lg:text-2xl pb-4">
            {{ scene3TextPart1 }}
          </div>
          <div v-if="partType === 2" class="text-md lg:text-2xl pb-4">
            {{ scene3TextPart2 }}
          </div>
          <div v-if="partType === 3" class="text-md lg:text-2xl pb-4">
            <div>
              {{ scene3TextPart3 }}
            </div>
            <div v-for="(question, index) in scene3Questions" :key="index">
              <button
                class="py-2 text-yellow-300 hover:text-yellow-500"
                @click="selectedQuestion = index"
              >
                ➪ {{ question.question }}
              </button>
            </div>
          </div>
          <div class="flex">
            <button
              v-if="partType !== 1"
              class="
                mx-2
                w-full
                text-xl
                font-bold
                bg-yellow-500
                hover:bg-yellow-400
                p-5
                rounded-xl
                text-black
              "
              @click="onPreviousClick"
            >
              Previous
            </button>
            <button
              v-if="
                partType === 1 ||
                partType === 2 ||
                (partType === 3 && selectedQuestion === 1)
              "
              class="
                mx-2
                w-full
                text-xl
                font-bold
                bg-yellow-500
                hover:bg-yellow-400
                p-5
                rounded-xl
                text-black
              "
              @click="onNextClick"
            >
              Next
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
      scene3TextPart1: `When the earth was still young, there were ten suns in the sky. It was extremely hot all the time and there was no such thing as night. The extreme heat made it hard to farm crops and endangered entire populations.`,
      scene3TextPart2: `One day, a skilled archer named Hou Yi decided that enough was enough. He raised his bow to the heavens and shot down nine of the ten suns. To reward him for his heroic deeds, the goddess Xiwangmu gave him an elixir of immortality, a prize typically reserved for immortals who had achieved enlightenment.`,
      scene3TextPart3: `Hou Yi take the exilir and …`,
      scene3Questions: [
        { question: 'Consume it ', answer: false },
        { question: 'Give it to Chang’ E ', answer: true },
        { question: 'Hide it underneath his bed', answer: false },
      ],
      selectedQuestion: null,
    }
  },
  methods: {
    onNextClick() {
      if (this.partType === 1) {
        this.partType = 2
      } else if (this.partType === 2) {
        this.partType = 3
      } else if (this.partType === 3) {
        this.$emit('next', 4)
      }
    },
    onPreviousClick() {
      this.partType -= 1
    },
  },
}
</script>

<style scoped>
.bg-picture {
  background: url(~/assets/images/mooncake_scene_3.jpeg) no-repeat center center;
  background-size: cover;
  overflow: hidden;
}
</style>
