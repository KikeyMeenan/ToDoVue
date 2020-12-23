<template>
  <div v-if="showActionResult" @click="hideMessage(false)" class="action-message"
  v-bind:class="{ 'action-message--error': isError, 'action-message--success': isSuccess }">
    {{ actionMessage ? actionMessage : genericActionMessage }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
import ActionStatus from '@/types/ActionStatus';

@Component({
  computed: {
    showActionResult() {
      const showMessage = this.$store.getters['ActionMessageModule/getActionResultDisplay'];
      const actionStatus = this.$store.getters['ActionMessageModule/getActionStatus'];
      return showMessage
      && (actionStatus === ActionStatus.Success || actionStatus === ActionStatus.Error);
    },
    isError() {
      return this.$store.getters['ActionMessageModule/getActionStatus'] === ActionStatus.Error;
    },
    isSuccess() {
      return this.$store.getters['ActionMessageModule/getActionStatus'] === ActionStatus.Success;
    },
    ...mapGetters('ActionMessageModule', {
      actionStatus: 'getActionStatus',
    }),
    genericActionMessage() {
      const actionStatus = this.$store.getters['ActionMessageModule/getActionStatus'];
      if (actionStatus === ActionStatus.Success) {
        return 'Success';
      }
      return 'Error';
    },
    ...mapGetters('ActionMessageModule', {
      actionMessage: 'getActionMessage',
    }),
  },
  methods: {
    ...mapActions('ActionMessageModule', {
      hideMessage: 'updateActionResultDisplay',
    }),
  },
})
export default class ActionMessage extends Vue {
}
</script>

<style scoped lang="scss">
.action-message {
  border: 1px solid black;
  max-width: 200px;
  padding: 10px;
  cursor: pointer;

  &--error {
    background: red;
  }

  &--success {
    background: green;
  }
}
</style>
