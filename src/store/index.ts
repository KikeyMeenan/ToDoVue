import Vue from 'vue';
import Vuex from 'vuex';
import ToDoModule from './ToDo/module';
import CategoryFilterModule from './Filters/categoryFilter';
import GenericLogicalFilter from './Filters/genericLogicalFilterModule';
import ItemModule from './Item/module';
import CategoryModule from './Category/module';
import ActionMessageModule from './ActionMessage/module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    ToDoModule,
    ItemModule,
    CategoryFilterModule,
    CompleteFilterModule: GenericLogicalFilter(),
    AssignedFilterModule: GenericLogicalFilter(),
    HighPriorityFilterModule: GenericLogicalFilter(),
    CategoryModule,
    ActionMessageModule,
  },
});
