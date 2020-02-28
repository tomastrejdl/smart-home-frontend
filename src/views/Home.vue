<template>
  <div class="home">
    <NavBar></NavBar>
    <AttachmentList></AttachmentList>
  </div>
</template>

<script>
// @ is an alias to /src
import AttachmentList from '@/components/attachment/AttachmentList'

export default {
  components: {
    AttachmentList
  }
}
</script>
