<template>
  <v-footer
    color="grey darken-2"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        cols="12"
      >
        <v-row>
          <v-col
            cols="3"
          >
            <v-card
              color="grey darken-2"
            >
              <v-card-title
                class="headline"
              >
                Contacts
              </v-card-title>
            </v-card>
          </v-col>
          <v-col
            cols="3"
          >
            <v-card
              color="grey darken-2"
            >
              <v-card-title
                class="headline"
              >
                Contacts
              </v-card-title>
              <v-icon size="24px">mdi-facebook</v-icon>
              <v-icon size="24px">mdi-twitter</v-icon>
            </v-card>
          </v-col>
          <v-col
            cols="3"
          >
            <v-card
              color="grey darken-2"
            >
              <v-card-title
                class="headline"
              >
                Contacts
              </v-card-title>
            </v-card>
          </v-col>
          <v-col
            cols="3"
          >
            <v-card
              color="grey darken-2"
            >
              <v-card-title
                class="headline"
              >
                Contacts
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        class="grey darken-3 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'footer',

    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Contact Us',
      ],
    }),
  }
</script>
