<template>
  <select :value="selected" @change="changeSelected($event.target.value)">
    <option :value="null">All</option>
    <option v-for="category in categories" :key="category.id" :value="category.id">
      {{ category.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

@Component({
  props: {
    text: String,
    active: Boolean,
  },
  methods: {
    toggleFilter() {
      this.$emit('toggleFilter');
    },
    ...mapActions('CategoryFilterModule', {
      changeSelected: 'changeSelected',
    }),
  },
  computed: {
    ...mapGetters('CategoryFilterModule', {
      categories: 'Categories',
      selected: 'Selected',
    }),
  },
})
export default class GenericFilter extends Vue {}
</script>
