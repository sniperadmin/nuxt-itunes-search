<template>
  <div>
    <h1>results for "{{ $route.params.id }}"</h1>

    <div v-if="albumThere">
      <div v-for="(album, index) in results" :key="index">
        <Card
          :title="album.collectionName"
          :image="album.artworkUrl100"
          :artist-name="album.artistName"
          :url="album.artistViewUrl"
          :color="picker(index)"
        />
      </div>
    </div>
    <div v-else>
      <h1>Could not find results</h1>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
import Card from '@/components/Card.vue'
export default {
  middleware: 'search',
  components: {
    Card
  },
  computed: {
    ...mapGetters({ results: 'getAlbums' }),

    albumThere () {
      return this.results
    }
  },
  methods: {
    picker (i) {
      return i % 2 === 0 ? 'indigo lighten-1' : 'teal lighten-2'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
