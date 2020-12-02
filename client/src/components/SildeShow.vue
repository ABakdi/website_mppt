<template>
  <vueper-slides autoplay :touchable="false">
    <vueper-slide
      v-for="i in 5"
      :key="i"
      :title="i"
      :content="i"
      />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
  export default {

    name: 'slide-show',

    components: {
      VueperSlides,
      VueperSlide
    },

    data: () =>({
      slides: [
        {
          title: 'Slide #1',
          content: 'Slide content'
        }
      ]
    }),
  }
</script>
