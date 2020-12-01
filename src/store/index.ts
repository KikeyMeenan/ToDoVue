import Vue from 'vue';
import Vuex from 'vuex';
import ToDoModule from './ToDo/module';
import CompleteFilterModule from './Filters/completeFilter';
import AssignedFilterModule from './Filters/assignedFilter';
import HighPriorityFilterModule from './Filters/highPriorityFilter';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  // register filter modules when comonents are created? it's possible!
  // also, only render components in active filter list? is this getting too crazy?
  modules: {
    ToDoModule,
    CompleteFilterModule: CompleteFilterModule.module,
    AssignedFilterModule: AssignedFilterModule.module,
    HighPriorityFilterModule: HighPriorityFilterModule.module,
  },
});
