<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          <router-link to="/" >
            <span style="font-family: 'Frijole', cursive;"> GUMBY </span>
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Welcome, guest.</q-item-label>
        <q-item clickable to="login">
          <q-item-section avatar>
            <q-icon name="exit_to_app" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="journal">
          <q-item-section avatar>
            <q-icon name="subject" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Journal</q-item-label>
            <q-item-label caption>Track all of your climbing activities</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="routes">
          <q-item-section avatar>
            <q-icon name="satellite" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Routes</q-item-label>
            <q-item-label caption>Search for new climbs to try</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
