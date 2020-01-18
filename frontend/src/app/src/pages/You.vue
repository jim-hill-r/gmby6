<template>
  <q-page padding>
    <div class="text-center">
      <h2 style="font-family: 'Frijole', cursive; color:#43A047"> Coming Soon </h2>
      <p> Let us know what you would like to see as we develop this section. </p>
      <p> Visit <router-link to="/donate"> Donate </router-link> for more information on how to contribute.</p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageYou',
  data () {
    return {
      username: 'guest',
      password: `
        Work in progress. Please be patient.
      `
    }
  },
  methods: {
    signin () {
      this.$store.dispatch('users/signin', this.username)
    }
  }
}
</script>
