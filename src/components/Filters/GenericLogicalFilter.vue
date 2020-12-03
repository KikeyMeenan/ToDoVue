<template>
  <button v-on:click="toggleFilter">{{ text }} {{ active ? 'on' : 'off' }}</button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    text: String,
    active: Boolean,
  },
  methods: {
    toggleFilter() {
      this.$emit('toggleFilter');
    },
  },
})
export default class GenericLogicalFilter extends Vue {}
</script>
