<template>
  <div class="home">
    <h1>Category List</h1>
    <CategoryDisplay v-for="category in categories" :key="category.id" :category="category"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CategoryDisplay from '@/components/Categories/CategoryDisplay.vue';
import { mapGetters } from 'vuex';

@Component({
  components: {
    CategoryDisplay,
  },
  computed: {
    ...mapGetters('CategoryModule', [
      'categories',
    ]),
  },
})
export default class CategoryList extends Vue {}
</script>
