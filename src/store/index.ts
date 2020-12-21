import Vue from 'vue';
import Vuex from 'vuex';
import ActionStatus from '@/types/ActionStatus';
import ToDoModule from './ToDo/module';
import CategoryFilterModule from './Filters/categoryFilter';
import GenericLogicalFilter from './Filters/genericLogicalFilterModule';
import ItemModule from './Item/module';
import CategoryModule from './Category/module';

Vue.use(Vuex);

interface State {
  actionStatus: ActionStatus;
  actionMessage: string | null;
}

export default new Vuex.Store({
  state: {
    actionStatus: ActionStatus.None,
    actionMessage: null,
  } as State,
  mutations: {
    setActionStatus(state: State, payload: ActionStatus) {
      state.actionStatus = payload;
    },
    setActionMessage(state: State, payload: string) {
      state.actionMessage = payload;
    },
  },
  actions: {
    updateActionStatus(context: any, payload: ActionStatus) {
      context.commit('setActionStatus', context);
    },
    updateActionMessage(context: any, payload: string) {
      context.commit('setActionMessage', context);
    },
  },
  modules: {
    ToDoModule,
    ItemModule,
    CategoryFilterModule,
    CompleteFilterModule: GenericLogicalFilter(),
    AssignedFilterModule: GenericLogicalFilter(),
    HighPriorityFilterModule: GenericLogicalFilter(),
    CategoryModule,
  },
});
