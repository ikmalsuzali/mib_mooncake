<template>
  <div class="overlay grid bg-picture">
    <div class="fixed bottom-0 w-full bg-gray-800 bg-opacity-70">
      <div class="container mx-auto px-5 lg:px-40 py-8">
        <div class="grid text-white">
          <div v-if="partType === 1" class="text-md lg:text-2xl pb-4">
            {{ scene4TextPart1 }}
          </div>
          <div v-if="partType === 2" class="text-md lg:text-2xl pb-4">
            <div>
              {{ scene4TextPart2 }}
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
                partType === 1 || (partType === 2 && selectedQuestion === 2)
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
import sound from '../mixins/sound.js'

export default {
  mixins: [sound],
  data() {
    return {
      partType: 1,
      scene4TextPart1: `While Hou Yi was grateful for the gift, he felt conflicted. Xiwangmu had only given him enough elixir for one person, and he did not wish to be immortal if his wife could not live at his side for eternity. Ultimately, Hou Yi decided to remain mortal and hide the elixir under his bed.`,
      scene4TextPart2: `What happen then?`,
      sceneQuestions: [
        { question: 'Hou Yi and Chang’E live happily', answer: false },
        { question: 'Hou Yi decide to give Cheng’E the elixir', answer: false },
        { question: `Chang’E found it out and ate it`, answer: true },
      ],
      selectedQuestion: null,
    }
  },
  methods: {
    onNextClick() {
      if (this.partType === 1) {
        this.partType = 2
      } else if (this.partType === 2) {
        this.$emit('next', 5)
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
  background: url(~/assets/images/mooncake_scene_4.jpeg) no-repeat center center;
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
