<template>
  <v-app>
    <menu-bar/>
    <v-main>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import MenuBar from './components/MenuBar'
export default {
  name: 'App',

  components: {
    MenuBar,
  },

  data: () => ({
    //
  }),
};
</script>
