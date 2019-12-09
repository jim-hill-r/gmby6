<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 50%;">
      <q-input outlined v-model="username" label="Username">
        <template v-slot:append>
          <q-avatar>
            <img src="~assets/gumby-logo-full.svg">
          </q-avatar>
        </template>
      </q-input>
      <q-input readonly disable outlined v-model="password" label="Password">
      </q-input>
      <div>
        <q-btn color="primary" label="Sign in" @click="signin()"/>
      </div>

      <div>
      ** Privacy warning.
      Currently this is unauthenticated and any user can type in your username and get your data.
      Please do not put anything into Gumby you do not want public at this time.
      We are actively working to provide user authentication and will migrate your data once this is complete.
      If you are a developer and would like to contribute this feature please reach out. **
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageLogin',
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
