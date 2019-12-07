<template>
  <q-page padding>
    <q-card class="my-card" v-for="post in posts" v-bind:key="post.id">
      <q-card-section>
        {{ post.text }}
      </q-card-section>
    </q-card>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" />
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: 'PageJournal',
  data () {
    return {
      posts: [
        {
          id: 1,
          text: 'Hello, world!'
        },
        {
          id: 2,
          text: 'Second Post'
        }
      ]
    }
  }
}
</script>
