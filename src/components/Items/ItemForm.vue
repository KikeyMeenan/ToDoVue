<template>
  <div>
    <h1>{{ title }}</h1>
    <form @submit.prevent="submitForm" action="#" method="post">
      <p>Name</p>
      <input type="text" v-model="name" required />
      <p>Description</p>
      <input type="text" v-model="description" />
      <p>Priority</p>
      <input type="number" v-model="priority" />
      <p>Category</p>
      <input type="number" v-model="categoryId" required />
      <p>Effort</p>
      <input type="number" v-model="effort" />
      <p>Complete By</p>
      <input type="date" v-model="completeBy" />
      <p>Assigned To</p>
      <input type="number" v-model="assignedToUserId" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ItemSubmission, Item } from '@/types/ToDoTypes';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    item: Object as () => Item | null,
    title: String,
  },
  data() {
    return {
      name: this.$props.item ? this.$props.item.name : '',
      description: this.$props.item ? this.$props.item.description : '',
      priority: this.$props.item ? this.$props.item.priority : 1,
      effort: this.$props.item ? this.$props.item.effort : 1,
      categoryId: this.$props.item ? this.$props.item.categoryId : 1,
      completeBy: this.$props.item ? this.$props.item.completeBy : null,
      assignedToUserId: this.$props.item ? this.$props.item.assignedToUserId : null,
    };
  },
  methods: {
    submitForm(event: any) {
      const item: ItemSubmission = {
        name: this.$data.name,
        priority: this.$data.priority,
        categoryId: this.$data.categoryId,
        effort: this.$data.effort,
        createdByUserId: 1,
        createdDate: new Date().toString(),
        description: this.$data.description,
        completeBy: this.$data.completeBy,
        assignedToUserId: this.$data.assignedToUserId,
        assignedByUserId: null,
        assignedDate: null,
      };

      this.$emit('submitForm', item);
    },
  },
})
export default class ItemForm extends Vue {}
</script>
