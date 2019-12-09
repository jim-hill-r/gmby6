<template>
  <q-page padding>
    <q-card v-if="newPostOpen">
      <q-card-section>
        <div>
          <q-input
            v-model="newText"
            outlined
            type="textarea"
          />
        </div>
        <q-btn color="primary" label="Submit" @click="submitClick()"/>
        <q-btn label="Cancel" @click="cancelClick()"/>
      </q-card-section>
    </q-card>

    <q-card v-for="post in posts" v-bind:key="post.id">
      <q-card-section>
        {{ post.text }} - <pretty-date v-bind:isodate="post.created" />
      </q-card-section>
    </q-card>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" v-if="!newPostOpen" @click="newPostOpen = !newPostOpen"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import PrettyDate from '../components/prettydate.vue'

export default {
  name: 'PageJournal',
  components: {
    PrettyDate
  },
  created () {
    this.$store.dispatch('journal/getPosts')
  },
  data () {
    return {
      newPostOpen: false,
      newText: ''
    }
  },
  computed: {
    posts: {
      get () {
        return this.$store.state.journal.posts
      }
    }
  },
  methods: {
    cancelClick () {
      this.newPostOpen = !this.newPostOpen
      this.newText = ''
    },
    submitClick () {
      this.$store.dispatch('journal/createPost', this.newText)
      this.newPostOpen = !this.newPostOpen
      this.newText = ''
    }
  }
}
</script>
