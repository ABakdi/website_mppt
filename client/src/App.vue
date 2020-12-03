<template>
  <v-app>
    <menu-bar
      :Menus='Menus'
    />
    <v-main>
      <slide-show
        :Slides='Slides'
      />
      <peek-at-group/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import MenuBar from './components/MenuBar'
import SlideShow from './components/SildeShow'
import PeekAtGroup from './components/PeekAtGroup'
import Footer from './components/Footer'
export default {
  name: 'App',

  components: {
    MenuBar,
    SlideShow,
    PeekAtGroup,
    Footer,
  },

  data: () => ({
    Menus: [
      {
        title: 'Menu1',
        itemes: [
          {title: 'Menu1Item1'},
          {title: 'Menu1Item2'},
          {title: 'Menu1Item3'},
          {title: 'Menu1Item4'},
          {title: 'Menu1Item5'},
        ]
      }
    ],

    Slides: [
      {
        title: "Slide #1",
        content: "Content #1",
        image: require('@/assets/logo.png'),
      },
      {
        title: "Slide #2",
        content: "Content #2",
        image: require('@/assets/logo.svg'),
      },
      {
        title: "Slide #3",
        content: "Content #3",
        image: require('@/assets/logo.png'),
      },
      {
        title: "Slide #4",
        content: "Content #4",
        image: require('@/assets/logo.svg'),
      },
      {
        title: "Slide #5",
        content: "Content #5",
        image: require('@/assets/logo.png'),
      },
    ]
  }),
};
</script>
