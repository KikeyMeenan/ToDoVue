<template>
  <button :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: { type: String },
  computed: {
    buttonClasses(): string[] {
      return ['button', this.$props.type ? `button--${this.$props.type}` : ''];
    },
  },
})
export default class CustomButton extends Vue { }
</script>

<style scoped lang="scss">
.button {
  border: 0;
  border-radius: 0.25rem;
  background: #1E88E5;
  color: white;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;

  &:hover {
    background: #8eb4d4;
  }

  &--danger {
    background-color: #f00;

    &:hover {
      background: rgb(238, 150, 150);
    }
  }

  &--success {
    background-color: rgb(58, 228, 58);

    &:hover {
      background: rgb(133, 223, 133);
    }
  }

  &--warning {
    background-color: rgb(247, 180, 55);

    &:hover {
      background: rgb(248, 207, 129);
    }
  }
}
</style>
