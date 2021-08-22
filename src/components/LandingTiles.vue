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
              <v-btn text>
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
              <v-btn text :href=musicianUrl>
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
              <v-btn text>
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
              <v-btn text>
                Songbook
              </v-btn>
            </v-card-actions>
          </v-card>

            </v-col>
          </v-row>

    </v-container>
<!--  </v-card>-->


</template>

<script>
export default {
  name: "LandingTiles",
  data() {
    return {
      musicianUrl: process.env.VUE_APP_MUSICIAN_URL
    };
  }
};
</script>