<template>
  <div v-if="showLoadingMessage" class="loading-message-container">
    <div class="loading-message">
      <div class="loading-message__message">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ActionStatus from '@/types/ActionStatus';

@Component({
  computed: {
    showLoadingMessage() {
      return (this.$store.getters['ActionMessageModule/getActionStatus'] === ActionStatus.InProgress);
    },
  },
})
export default class LoadingMessage extends Vue {
}
</script>

<style scoped lang="scss">
  .loading-message-container {
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
  }
  .loading-message {
    width: 100%;
    height: 100%;
    position: relative;

    &__message {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid #000;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #000 transparent transparent transparent;

      &:nth-child(1) {
        animation-delay: -0.45s;
      }

      &:nth-child(2) {
        animation-delay: -0.3s;
      }

      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
