<template>
  <div class="fixed-center text-center">
    Logging out...
  </div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    this.$store.dispatch('users/userLoggedOut')
    this.$router.push('/')
  }
}
</script>
