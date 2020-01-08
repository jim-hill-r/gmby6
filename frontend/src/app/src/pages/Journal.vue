<template>
  <q-page padding>
    <q-banner rounded class="bg-accent text-white" v-if="!hideBanner">
      <div>
        Welcome friend. Enjoy our demonstration journal. Sign in to save.
      </div>
      <template v-slot:action>
        <q-btn flat color="white" label="Continue as a Guest" @click="closeBanner=true" />
        <q-btn flat color="white" label="Sign in" />
      </template>
    </q-banner>

    <div v-for="post in posts" v-bind:key="post.id">
      <post v-bind:post="post"> </post>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" @click="createPost()"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import Post from '../components/Post.vue'

export default {
  name: 'PageJournal',
  components: {
    Post
  },
  created () {
    this.$store.dispatch('journal/getPosts')
  },
  data () {
    return {
      newPost: {},
      newPostOpen: false,
      closeBanner: false
    }
  },
  methods: {
    createPost () {
      this.$store.dispatch('journal/createPost')
    }
  },
  computed: {
    posts: {
      get () {
        return this.$store.state.journal.posts
      }
    },
    hideBanner: {
      get () {
        return this.$store.state.users.isAuthenticated || this.closeBanner
      }
    }
  }
}
</script>
