import Vue from 'vue';
import Vuex from 'vuex';
import ToDoModule from './ToDo/module';
import CompleteFilterModule from './Filters/completeFilterModule';
import AssignedFilterModule from './Filters/assignedFilterModule';

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
    CompleteFilterModule,
    AssignedFilterModule,
  },
});
