<template>
  <div class="home">
    <h1>List</h1>
    <ToDoItem v-for="item in toDoList" :key="item.id" :item="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDoItem from '@/components/ToDoItem.vue';

@Component({
  components: {
    ToDoItem,
  },
  computed: {
    toDoList() {
      return this.$store.getters['ToDoModule/ToDos'];
    },
  },
})
export default class Home extends Vue {}
</script>
