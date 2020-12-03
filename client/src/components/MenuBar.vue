<template>
    <v-app-bar
      app
      dark
      flat
    >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <menu-instance
      v-for="(menu, i) in Menus"
      :key='i'
      :Menu='menu'
    />
    <v-spacer></v-spacer>
    <search-bar/>
    </v-app-bar>
</template>

<script>
import MenuInstance from './MenuInstance.vue'
import SearchBar from './SearchBar.vue'
  export default {
    name: 'menu-bar',
    props:{
      Menus: Array,
    },

    components: {
      MenuInstance,
      SearchBar,
    },

    data: () => ({
      //
    }),
};
</script>
