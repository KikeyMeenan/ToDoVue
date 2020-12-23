<template>
  <div id="app">
    <div class="nav">
      <router-link class="nav__item" to="/">To Do</router-link>
      <router-link class="nav__item" to="/create-item">Create Item</router-link>
      <router-link class="nav__item" to="/categories">Categories</router-link>
      <router-link class="nav__item" to="/create-category">Create Category</router-link>
    </div>
    <router-view/>
    <LoadingMessage />
    <ActionMessage id="action-message-container" />
  </div>
</template>

<script lang="ts">
import ActionMessage from '@/components/ActionMessage/ActionMessage.vue';
import LoadingMessage from '@/components/LoadingMessage/LoadingMessage.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ActionMessage,
    LoadingMessage,
  },
})
export default class CreateItem extends Vue {}
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  padding-top:10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;

  &__item {
    padding-right: 10px;

    &:not(:first-child) {
      padding-left: 10px;
    }

    &:not(:last-child) {
      border-right: 1px solid #000;
    }
  }
}

#action-message-container {
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>
