<template>
  <q-card v-if="post">
    <q-card-section v-if="post.editing">
      <div>
        <q-btn color="accent" flat dense round icon="add" aria-laebl="Add Climb" @click="addClimb()"/>
        <q-btn color="primary" flat dense round icon="save" aria-label="Save" @click="save()"/>
        <q-btn color="red" flat dense round icon="cancel" aria-label="Cancel" @click="cancel()"/>
      </div>
      <div>
        <q-input
          v-model="post.text"
          outlined
          type="textarea"
        />
      </div>
      <div v-for="climb in post.climbs" v-bind:key="climb.id">
        <Climb> </Climb>
      </div>
    </q-card-section>
    <q-card-section v-if="!post.editing">
      <div>
        <pretty-date v-bind:isodate="post.created" />
        <q-btn color="primary" flat dense round icon="edit" aria-label="Edit" @click="edit()" />
      </div>
      <div>
        {{ post.text }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import PrettyDate from '../components/PrettyDate.vue'
import Climb from '../components/Climb.vue'

export default {
  name: 'Post',
  components: {
    PrettyDate,
    Climb
  },
  created () {
    console.log(this.post)
  },
  props: {
    post: {}
  },
  methods: {
    cancel () {
      this.$store.dispatch('journal/cancelEditPost', this.post)
    },
    edit () {
      this.$store.dispatch('journal/editPost', this.post)
    },
    save () {
      this.$store.dispatch('journal/savePost', this.post)
    },
    addClimb () {
      this.$store.dispatch('journal/createClimb', this.post.id)
    }
  }
}
</script>
