<template>

<v-card
    max-width="400"
    class="mx-auto"
  >
    <!-- <v-system-bar
      color="pink darken-2"
      dark
    >
      <v-spacer></v-spacer>

      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
    </v-system-bar> -->

    <!-- <v-app-bar
      dark
      color="pink"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>My Music</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-container>
      <!-- <v-row dense>
        <v-col cols="12"> -->
          <v-card
          >
<v-img :src="require('./../assets/iconfinder_projector_6137765.png')"
transition="scale-transition"
          width="300"/>
            <v-card-actions>
              <v-btn text>
                Projector
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card
          >
<v-img :src="require('./../assets/iconfinder_Music_7149758.png')"
transition="scale-transition"
          width="300" />
            <v-card-actions>
              <v-btn text>
                Musician
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card>
<v-img :src="require('./../assets/iconfinder_373-Present_2124250.png')"
transition="scale-transition"
          width="300" />
            <v-card-actions>
              <v-btn text>
                Presenter
              </v-btn>
            </v-card-actions>
          </v-card>

      <v-card
          >
<v-img :src="require('./../assets/iconfinder_book_audio_add_103382.png')"
transition="scale-transition"
          width="300" />
            <v-card-actions>
              <v-btn text>
                Songbook
              </v-btn>
            </v-card-actions>
          </v-card>



    </v-container>
  </v-card>


</template>
