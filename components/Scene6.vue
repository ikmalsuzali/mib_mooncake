<template>
  <div class="overlay grid bg-picture">
    <div class="fixed bottom-0 w-full bg-gray-800 bg-opacity-70">
      <div class="container mx-auto px-5 lg:px-40 py-8">
        <div class="grid text-white">
          <div v-if="partType === 1" class="text-md lg:text-2xl pb-4">
            {{ sceneTextPart1 }}
          </div>
          <div v-if="partType === 2" class="text-md lg:text-2xl pb-4">
            <div>
              {{ sceneTextPart2 }}
            </div>
            <div v-for="(question, index) in sceneQuestions" :key="index">
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
                partType === 1 || (partType === 2 && selectedQuestion === 1)
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
      sceneTextPart1: `Hou Yi was so angry that he grabbed his bow and tried to shoot Chang’e down; he missed every shot. As time went by, Hou Yi’s anger subsided and he began to miss his wife. He would often stare up at the moon and think about how lonely Chang’e must be.`,
      sceneTextPart2: `What did Hou Yi do then?`,
      sceneQuestions: [
        {
          question: 'Go and see XiWangMu to get another elixir',
          answer: false,
        },
        {
          question: 'Make Chang’E favourite dessert until the day he died',
          answer: true,
        },
        { question: `Married the another woman`, answer: false },
      ],
      selectedQuestion: null,
    }
  },
  methods: {
    onNextClick() {
      if (this.partType === 1) {
        this.partType = 2
      } else if (this.partType === 2) {
        this.$emit('next', 7)
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
  background: url(~/assets/images/mooncake_scene_6.jpeg) no-repeat center center;
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
