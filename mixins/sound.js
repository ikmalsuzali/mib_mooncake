import right1 from '../assets/sounds/right_1.mp3'
import right2 from '../assets/sounds/right_2.mp3'
import wrong1 from '../assets/sounds/wrong_1.mp3'
import wrong2 from '../assets/sounds/wrong_2.mp3'

export default {
  data() {
    return {
      soundType: null,
    }
  },
  methods: {
    onPlay(type) {
      if (type === 'right_1') {
        this.soundType = right1
      } else if (type === 'right_2') {
        this.soundType = right2
      } else if (type === 'wrong_1') {
        this.soundType = wrong1
      } else if (type === 'wrong_2') {
        this.soundType = wrong2
      }
      const playPromise = new Audio(this.soundType)
      playPromise.play()
    },
  },
}
