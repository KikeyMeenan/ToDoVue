<template>
  <div class="home">
    <h1>List</h1>
    <CompleteFilter />
    <ToDoItem v-for="item in toDoList" :key="item.id" :item="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDoItem from '@/components/ToDoItem.vue';
import CompleteFilter from '@/components/CompleteFilter.vue';
import { mapGetters } from 'vuex';

@Component({
  components: {
    ToDoItem,
    CompleteFilter,
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
