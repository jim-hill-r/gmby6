<template>
  <div class="fixed-center text-center">
    Logging in...
  </div>
</template>

<script>
export default {
  name: 'Login',
  created () {
    this.$store.dispatch('users/userLoggedIn', window.location.href)
    this.$router.push('/you')
  }
}
</script>
