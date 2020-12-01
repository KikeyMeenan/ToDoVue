<template>
  <div class="home">
    <h1>List</h1>
    <GenericFilter text="complete" @toggleFilter="toggleCompleteFilter"/>
    <GenericFilter text="assigned" @toggleFilter="toggleAssignedFilter"/>
    <GenericFilter text="high priority" @toggleFilter="toggleHighPriorityFilter"/>
    <ToDoItem v-for="item in toDoList" :key="item.id" :item="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDoItem from '@/components/ToDoItem.vue';
import GenericFilter from '@/components/GenericFilter.vue';
import { mapGetters, mapActions } from 'vuex';

@Component({
  components: {
    ToDoItem,
    GenericFilter,
  },
  computed: {
    toDoList() {
      return this.$store.getters['ToDoModule/ToDos'];
    },
    ...mapGetters('ToDoModule', [
      'ToDos',
    ]),
  },
  methods: {
    ...mapActions('AssignedFilterModule', {
      toggleAssignedFilter: 'toggleActive',
    }),
    ...mapActions('CompleteFilterModule', {
      toggleCompleteFilter: 'toggleActive',
    }),
    ...mapActions('HighPriorityFilterModule', {
      toggleHighPriorityFilter: 'toggleActive',
    }),
  },
})
export default class Home extends Vue {}
</script>
