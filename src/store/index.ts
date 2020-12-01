import Vue from 'vue';
import Vuex from 'vuex';
import ToDoModule from './ToDo/module';
import CompleteFilterModule from './Filters/completeFilterModule';
import AssignedFilterModule from './Filters/assignedFilterModule';
import GenericFilterModule from './Filters/genericFilterModule';

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
    CompleteFilterModule: GenericFilterModule(),
    AssignedFilterModule: GenericFilterModule(),
  },
});
