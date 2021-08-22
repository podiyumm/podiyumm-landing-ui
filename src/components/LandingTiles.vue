<template>
    <v-container fluid>
        <v-row justify="center">
        <v-col lg="2" md="2" sm="4">
          <v-card
          >
<v-img :src="require('./../assets/iconfinder_projector_6137765.png')"
transition="scale-transition"
          width="100%"/>
            <v-card-actions>
              <v-btn :href=peojectorUrl target="_blank">
                Projector
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
          <v-col lg="2" md="2" sm="4">
          <v-card
          >
<v-img :src="require('./../assets/iconfinder_Music_7149758.png')"
transition="scale-transition"
          width="100%" />
            <v-card-actions>
              <v-btn :href=musicianUrl target="_blank">
                Musician
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
          <v-col lg="2" md="2" sm="4">
          <v-card>
<v-img :src="require('./../assets/iconfinder_373-Present_2124250.png')"
transition="scale-transition"
          width="100%" />
            <v-card-actions>
              <v-btn :href=presenterUrl target="_blank">
                Presenter
              </v-btn>
            </v-card-actions>
          </v-card>
            </v-col>
          <v-col lg="2" md="2" sm="4">
      <v-card
          >
<v-img :src="require('./../assets/iconfinder_book_audio_add_103382.png')"
transition="scale-transition"
          width="100%" />
            <v-card-actions>
              <v-btn :href=songbookUrl target="_blank">
                Songbook
              </v-btn>
            </v-card-actions>
          </v-card>

            </v-col>
          </v-row>

    </v-container>


</template>

<script>
export default {
  name: "LandingTiles",
  data() {
    return {
      musicianUrl: process.env.VUE_APP_MUSICIAN_URL,
      presenterUrl: process.env.VUE_APP_PRESENTER_URL,
      songbookUrl: process.env.VUE_APP_SONGBOOK_URL,
      peojectorUrl: process.env.VUE_APP_MUSICIAN_URL
    };
  }
};
</script>