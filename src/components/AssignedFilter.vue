<template>
  <button v-on:click="toggleActive">Assigned to 1</button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  methods: {
    ...mapActions('AssignedFilterModule', [
      'toggleActive',
    ]),
  },
})
export default class AssignedFilter extends Vue {}
</script>
