<template>
  <CategoryForm title="Create Category" @submitForm="createCategory" />
</template>

<script lang="ts">
import CategoryForm from '@/components/Categories/CategoryForm.vue';
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  components: {
    CategoryForm,
  },
  methods: {
    ...mapActions('CategoryModule', {
      createCategory: 'createCategory',
    }),
  },
})
export default class CreateCategory extends Vue {}
</script>
