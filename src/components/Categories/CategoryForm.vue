<template>
  <div>
    <h1>{{ title }}</h1>
    <form @submit.prevent="submitForm" action="#" method="post">
      <p>Name</p>
      <input type="text" v-model="name" required />

      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { CategorySubmission } from '@/types/ToDoTypes';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    category: Object as () => CategorySubmission | null,
    title: String,
  },
  data() {
    return {
      name: this.$props.category ? this.$props.category.name : '',
    };
  },
  methods: {
    submitForm(event: any) {
      const newItem: CategorySubmission = {
        name: this.$data.name,
      };

      this.$emit('submitForm', newItem);
    },
  },
})
export default class CategoryForm extends Vue {}
</script>
