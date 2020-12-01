<template>
  <button v-on:click="toggleFilter">{{ text }}</button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    text: String,
  },
  methods: {
    toggleFilter() {
      this.$emit('toggleFilter');
    },
  },
})
export default class GenericFilter extends Vue {}
</script>
