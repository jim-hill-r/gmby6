<template>
  <q-page padding>
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
      newPostOpen: false
    }
  },
  methods: {
    createPost () {

    }
  },
  computed: {
    posts: {
      get () {
        return this.$store.state.journal.posts
      }
    }
  }
}
</script>
