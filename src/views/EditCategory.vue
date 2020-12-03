<template>
  <div>
    <CategoryForm v-if="getActiveCategory"
      :category="getActiveCategory" title="Create Category" @submitForm="editCategory" />
  </div>
</template>

<script lang="ts">
import CategoryForm from '@/components/Categories/CategoryForm.vue';
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';

@Component({
  data() {
    return {
      category: null,
    };
  },
  created() {
    this.$store.dispatch('CategoryModule/setActiveCategoryId', this.$route.params.id);
  },
  computed: {
    ...mapGetters('CategoryModule', {
      getActiveCategory: 'getActiveCategory',
    }),
  },
  components: {
    CategoryForm,
  },
  methods: {
    ...mapActions('CategoryModule', {
      editCategory: 'editCategory',
    }),
  },
})
export default class EditCategory extends Vue {}
</script>
