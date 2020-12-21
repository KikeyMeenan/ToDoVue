<template>
  <div class="home">
    <button @click="onSignIn">sign in</button>
    <h1>List</h1>
    <GenericLogicalFilter
    :active="isActiveCompleteFilter"
    text="complete"
    @toggleFilter="toggleCompleteFilter" />
    <GenericLogicalFilter
    :active="isActiveAssignedFilter"
    text="assigned"
    @toggleFilter="toggleAssignedFilter" />
    <GenericLogicalFilter
    :active="isActiveHighPriorityFilter"
    text="high priority"
    @toggleFilter="toggleHighPriorityFilter" />
    <CategoryFilter />
    <ToDoItem v-for="item in toDoList" :key="item.id" :item="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDoItem from '@/components/Items/ToDoItem.vue';
import GenericLogicalFilter from '@/components/Filters/GenericLogicalFilter.vue';
import CategoryFilter from '@/components/Filters/CategoryFilter.vue';
import { mapGetters, mapActions } from 'vuex';

@Component({
  components: {
    ToDoItem,
    GenericLogicalFilter,
    CategoryFilter,
  },
  async created() {
    await this.$store.dispatch('ItemModule/getItems');
  },
  computed: {
    toDoList() {
      return this.$store.getters['ToDoModule/ToDos'];
    },
    ...mapGetters('ToDoModule', [
      'ToDos',
    ]),
    ...mapGetters('AssignedFilterModule', {
      isActiveAssignedFilter: 'IsActive',
    }),
    ...mapGetters('CompleteFilterModule', {
      isActiveCompleteFilter: 'IsActive',
    }),
    ...mapGetters('HighPriorityFilterModule', {
      isActiveHighPriorityFilter: 'IsActive',
    }),
  },
  methods: {
    onSignIn() {
      // eslint-disable-next-line no-undef
      window.auth2.signIn().then((googleUser: any) => {
        const profile = googleUser.getBasicProfile();
        console.log('ID: ', profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ', profile.getName());
        console.log('Image URL: ', profile.getImageUrl());
        console.log('Email: ', profile.getEmail()); // This is null if the 'email' scope is not present.
      });
    },
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
