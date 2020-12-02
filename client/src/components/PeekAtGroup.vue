<template>
  <v-slide-group
    show-arrows
    center-active
  >
    <v-slide-item
      v-for="i in 10"
      :key="i"
      v-slot:default="{ active, toggle }"
      class="mx-16 my-5"
    >
      <v-sheet
        elevation="0"
        color="grey lighten-2"
        width="200"
        height="200"
        class="pa-6"
        @click="toggle"
      >
        ggggg
      </v-sheet>

    </v-slide-item>
  </v-slide-group>
</template>

<script>
  export default {
    name: 'peek-at-group'
  }
</script>
