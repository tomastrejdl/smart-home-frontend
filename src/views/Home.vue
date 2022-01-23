<template>
  <div class="home" id="home">
    <NavBar />

    <AttachmentList />
  </div>
</template>

<script>
// @ is an alias to /src
import AttachmentList from '@/components/attachment/AttachmentList'
import { mapActions } from 'vuex'

/**
 * Homepage (Dashboard)
 * Displays a grid of Attachments
 * Allows user to quickly switch Lights and Sockets ON or OFF, view temperature and door state (open/closed)
 */
export default {
  components: {
    AttachmentList
  },
  methods: {
    ...mapActions('attachments', ['getAttachments'])
  },
  mounted() {
    this.interval = setInterval(this.getAttachments, 5000)
  },
  destroyed() {
    clearInterval(this.interval)
  }
}
</script>
