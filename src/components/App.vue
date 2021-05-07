<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
        Podiyumm
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://podiymm.github.io"
        target="_blank"
        text
      >
        <span class="mr-2">Podiyumm</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <LandingTiles/>
    </v-main>
  </v-app>
</template>

<script>
import LandingTiles from './LandingTiles';

export default {
  name: 'App',

  components: {
    LandingTiles,
  },

  data: () => ({
    //
  }),
};
</script>
