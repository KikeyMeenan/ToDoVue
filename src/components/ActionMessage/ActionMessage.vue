<template>
  <div v-if="showActionResult">
    status: {{ actionStatus }}, message: {{ actionMessage }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import ActionStatus from '@/types/ActionStatus';

@Component({
  computed: {
    showActionResult() {
      const showMessage = this.$store.getters['ActionMessageModule/getActionResultDisplay'];
      const actionStatus = this.$store.getters['ActionMessageModule/getActionStatus'];
      return showMessage
      && (actionStatus === ActionStatus.Success || actionStatus === ActionStatus.Error);
    },
    ...mapGetters('ActionMessageModule', {
      actionStatus: 'getActionStatus',
    }),
    ...mapGetters('ActionMessageModule', {
      actionMessage: 'getActionMessage',
    }),
  },
})
export default class ActionMessage extends Vue {
}
</script>
