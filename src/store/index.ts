import Vue from 'vue';
import Vuex from 'vuex';
import ToDoModule from './ToDo/module';
import CategoryFilterModule from './Filters/categoryFilter';
import GenericLogicalFilter from './Filters/genericLogicalFilterModule';
import ItemModule from './Item/module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ToDoModule,
    ItemModule,
    CategoryFilterModule,
    CompleteFilterModule: GenericLogicalFilter(),
    AssignedFilterModule: GenericLogicalFilter(),
    HighPriorityFilterModule: GenericLogicalFilter(),
  },
});
