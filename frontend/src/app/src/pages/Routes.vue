<template>
  <q-page padding>
    <q-card v-if="newRouteOpen">
      <q-card-section>
        <div class="q-pa-md" style="width: 100%;">
          <q-input
            v-model="newTitle"
            outlined
            type="textarea"
          />
        </div>
        <q-btn color="primary" label="Submit" @click="submitClick()"/>
        <q-btn label="Cancel" @click="cancelClick()"/>
      </q-card-section>
    </q-card>

    <q-card v-for="route in routes" v-bind:key="route.id">
      <q-card-section>
        {{ route.title }}
      </q-card-section>
    </q-card>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" v-if="!newRouteOpen" @click="newRouteOpen = !newRouteOpen"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: 'PageRoutes',
  created () {
    this.$store.dispatch('routes/getRoutes')
  },
  data () {
    return {
      newRouteOpen: false,
      newTitle: ''
    }
  },
  computed: {
    routes: {
      get () {
        return this.$store.state.routes.routes
      }
    }
  },
  methods: {
    cancelClick () {
      this.newRouteOpen = !this.newRouteOpen
      this.newTitle = ''
    },
    submitClick () {
      this.$store.dispatch('routes/createRoute', this.newTitle)
      this.newRouteOpen = !this.newRouteOpen
      this.newTitle = ''
    }
  }
}
</script>
