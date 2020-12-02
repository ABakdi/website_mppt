<template>
  <v-toolbar
    dense
    flat
    :collapse="!showSearchBar"
  >
    <v-btn icon @click="btn_click_handler">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-text-field
      v-show="showSearchBar"
      hide-details
      single-line
      clearable
    ></v-text-field>
  </v-toolbar>
</template>

<script>
  export default {
    name:'search-bar',
    
    methods:{
      btn_click_handler: function(){
        this.showSearchBar = !this.showSearchBar
      }

    },

    data: () => ({
      showSearchBar: false,
    }),

  }
</script>
