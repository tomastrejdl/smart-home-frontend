<template>
  <div id="licenses">
    <NavBar :links="false" backLink="/about">Licenses</NavBar>
    <BaseList>
      <li v-for="(item, key) in licenses" :key="key">
        <BaseListItem :text="key">
          <template v-slot:left>
            <BaseBadge class="text-white bg-blue-500">
              {{ item.licenses }}
            </BaseBadge>
          </template>
        </BaseListItem>
      </li>
    </BaseList>

    <!-- BACKGROUND -->
    <transition name="fade" appear>
      <div class="fixed inset-0 bg-white" style="z-index: -1"></div>
    </transition>
  </div>
</template>

<script>
import licenses from '@/assets/licenses.json'
import { create } from 'vue-modal-dialogs'
import BaseListItem from '@/components/base/BaseListItem.vue'
import Modal from '@/components/Modal.vue'

export default {
  data: () => ({
    licenses: licenses
  })
}
</script>

<style></style>
