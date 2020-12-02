<template>
  <v-menu
      open-on-hover
      offset-y
      left
      bottom
      origin="center center"
      transition="slide-y-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-tab
        dark
        grow
        v-bind="attrs"
        v-on="on"
      >
        Menu
      </v-tab>
    </template>

    <v-list
      color="grey darken-2"
      nav
      flat
    >
      <template 
        v-for="(item, i) in items"
      >
      <v-hover 
        v-slot:default="{ hover }"
        close-delay="50"
      >
        <v-list-item
          :key="i"
          :class="{ 'on-hover': hover }"
        >
          <v-list-item-title color="white">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-hover>
      </template>
    </v-list>

  </v-menu>
</template>

<script>
  export default {
    name: 'menu-instance',

    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
};
</script>
<style scoped>
.v-list-item:not(.on-hover) {
    opacity: 0.6;
  }

</style>
