<template>
  <vueper-slides autoplay :touchable="false">
    <vueper-slide
      v-for="(slide, i) in Slides"
      :key="i"
      :title="slide.title"
      :content="slide.content"
      :image="slide.image"
      />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
  export default {

    name: 'slide-show',

    props: {
      Slides: Array,
    },

    components: {
      VueperSlides,
      VueperSlide
    },

    data: () =>({
    }),
  }
</script>
