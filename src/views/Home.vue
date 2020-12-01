<template>
  <div class="home">
    <h1>List</h1>
    <CompleteFilter />
    <AssignedFilter />
    <ToDoItem v-for="item in toDoList" :key="item.id" :item="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDoItem from '@/components/ToDoItem.vue';
import CompleteFilter from '@/components/CompleteFilter.vue';
import AssignedFilter from '@/components/AssignedFilter.vue';
import { mapGetters } from 'vuex';

@Component({
  components: {
    ToDoItem,
    CompleteFilter,
    AssignedFilter,
  },
  computed: {
    toDoList() {
      return this.$store.getters['ToDoModule/ToDos'];
    },
    ...mapGetters('ToDoModule', [
      'ToDos',
    ]),
  },
})
export default class Home extends Vue {}
</script>
