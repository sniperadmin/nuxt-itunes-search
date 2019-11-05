<template>
  <div
    id="e3"
    style="max-width: 400px; margin: auto;"
  >
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12>
          <v-card target="_blank" :href="url" :color="color" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">
                      {{ title }}
                    </div>
                    <div>{{ artistName }}</div>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <!-- <v-card-media
                    :src="image"
                    height="100px"
                    contain
                  /> -->
                  <v-avatar
                    class="ma-3"
                    size="125"
                    tile
                  >
                    <v-img :src="image" />
                  </v-avatar>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    artistName: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
