<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>

      <form @submit.prevent="submitQuery">
        <v-text-field
          v-model="search"
          :rules="rules"
          counter="25"
          filled
          label="search artist or albums"
          autofocus
        />
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
// import { mapGetters } from 'vuex'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data () {
    return {
      search: '',
      rules: [v => v.length <= 25 || 'Max 25 characters']
    }
  },
  methods: {
    submitQuery (e) {
      this.$router.push(`results/${this.search}`)
    }
  }
}
</script>
