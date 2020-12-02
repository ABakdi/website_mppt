<template>
  <v-app>
    <menu-bar/>
    <v-main>
      <slide-show/>
      <peek-at-group/>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import MenuBar from './components/MenuBar'
import SlideShow from './components/SildeShow'
import PeekAtGroup from'./components/PeekAtGroup'
export default {
  name: 'App',

  components: {
    MenuBar,
    SlideShow,
    PeekAtGroup,
  },

  data: () => ({
    //
  }),
};
</script>
