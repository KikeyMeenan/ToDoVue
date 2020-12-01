<template>
  <button v-on:click="toggleActive">Complete</button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  methods: {
    ...mapActions('CompleteFilterModule', [
      'toggleActive',
    ]),
  },
})
export default class CompleteFilter extends Vue {}
</script>
