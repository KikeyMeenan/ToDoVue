<template>
  <div>
    <p>
      name: {{ category.name }},
    </p>
    <button @click="editCategory(category.id)">Edit</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Category } from '@/types/ToDoTypes';

@Component({
  methods: {
    editCategory(id: number) {
      this.$router.push({ name: 'EditCategory', params: { id: id.toString() } });
    },
  },
})
export default class CategoryDisplay extends Vue {
  @Prop() private category!: Category;
}
</script>
