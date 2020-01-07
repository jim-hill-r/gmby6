<template>
  <span>{{ prettydate }}</span>
</template>

<script>
export default {
  name: 'PrettyDate',
  props: {
    isodate: String
  },
  computed: {
    prettydate: {
      get () {
        let datetime = new Date(this.isodate)
        let now = new Date()
        let diff = now - datetime

        let days = Math.floor(diff / (1000 * 60 * 60 * 24))
        if (days > 14) {
          return datetime.toLocaleString()
        } else if (days > 6) {
          return `Last week`
        } else if (days > 1) {
          return `${days} days ago`
        } else if (days > 0) {
          return `Yesterday`
        }
        diff -= days * (1000 * 60 * 60 * 24)

        let hours = Math.floor(diff / (1000 * 60 * 60))
        if (hours > 1) {
          return `${hours} hours ago`
        } else if (hours > 0) {
          return `${hours} hour ago`
        }
        diff -= hours * (1000 * 60 * 60)

        let minutes = Math.floor(diff / (1000 * 60))
        if (minutes > 1) {
          return `${minutes} minutes ago`
        } else if (minutes > 0) {
          return `${minutes} minute ago`
        }
        diff -= minutes * (1000 * 60)

        var seconds = Math.floor(diff / (1000))
        if (seconds > 15) {
          return `${seconds} minutes ago`
        }
        return `Just now`
      }
    }
  },
  data () {
    return {}
  }
}
</script>
