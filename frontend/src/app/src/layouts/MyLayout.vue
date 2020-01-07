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
            <span class="header-link" style="font-family: 'Frijole', cursive;"> GUMBY </span>
          </router-link>
        </q-toolbar-title>

        <q-space />

        <q-input
          dark
          dense
          standout
          rounded
          debounce="1000"
          type="search"
          v-model="searchText"
          input-class="text-right"
          class="q-ml-md"
          style="width:30%;"
          @input="submitSearch()"
        >
          <template v-slot:append>
            <q-icon v-if="searchText === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="clearSearch()"
            />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Welcome, {{ username }}.</q-item-label>
        <q-item clickable to="you">
          <q-item-section avatar>
            <q-icon name="exit_to_app" />
          </q-item-section>
          <q-item-section>
            <q-item-label>You</q-item-label>
            <q-item-label caption>Learn about your climbing</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="journal">
          <q-item-section avatar>
            <q-icon name="subject" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Journal</q-item-label>
            <q-item-label caption>Track your climbing activity</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="routes">
          <q-item-section avatar>
            <q-icon name="satellite" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Routes</q-item-label>
            <q-item-label caption>Search for your next project</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="meet">
          <q-item-section avatar>
            <q-icon name="find_in_page" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Meet</q-item-label>
            <q-item-label caption>Find others looking to climb</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item clickable to="donate">
          <q-item-section avatar>
            <q-icon name="attach_money" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Donate</q-item-label>
            <q-item-label caption>Support the community</q-item-label
            >
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
      leftDrawerOpen: false,
      searchText: ''
    }
  },
  computed: {
    username: {
      get () {
        return this.$store.state.users.user.username
      }
    }
  },
  methods: {
    clearSearch () {
      this.searchText = ''
      this.submitSearch()
    },
    submitSearch () {
      this.$store.dispatch('search/submitSearch', this.searchText)
    }
  }
}
</script>
