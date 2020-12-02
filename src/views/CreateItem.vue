<template>
  <div class="home">
    <h1>New Item</h1>
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
import { CreateItem } from '@/types/ToDoTypes';
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  data() {
    return {
      name: '',
      description: '',
      priority: 1,
      effort: 1,
      categoryId: 1,
      completeBy: null,
      assignedToUserId: null,
    };
  },
  methods: {
    ...mapActions('CreateItemModule', {
      createItem: 'createItem',
    }),
    submitForm(event: any) {
      const newItem: CreateItem = {
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

      this.$store.dispatch('CreateItemModule/createItem', newItem);
    },
  },
})
export default class Home extends Vue {}
</script>
