<template>
  <div class="home">
    <NavBar></NavBar>
    <AttachmentList></AttachmentList>
  </div>
</template>

<script>
// @ is an alias to /src
import AttachmentList from '@/components/attachment/AttachmentList'
import { mapActions } from 'vuex'

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
