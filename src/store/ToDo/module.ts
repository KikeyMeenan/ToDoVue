import { Item } from '@/types/ToDoTypes';

interface ToDoState {
  toDos: Array<Item> | null;
}

export const moduleGetters = {
  ToDos: (state: ToDoState, getters: any, rootState: any, rootGetters: any) => {
    if (!state.toDos) return null;
    let filteredResult = state.toDos;

    const assignedFilterActive = rootGetters['AssignedFilterModule/IsActive'] as boolean;
    if (assignedFilterActive) {
      filteredResult = filteredResult.filter((x) => x.assignedToUserId === 1);
    }

    const completeFilterActive = rootGetters['CompleteFilterModule/IsActive'] as boolean;
    if (completeFilterActive) {
      filteredResult = filteredResult.filter((x) => x.complete);
    }

    const highPriorityFilterActive = rootGetters['HighPriorityFilterModule/IsActive'] as boolean;
    if (highPriorityFilterActive) {
      filteredResult = filteredResult.filter((x) => x.priority > 1);
    }

    const categoryFilterSelected = rootGetters['CategoryFilterModule/Selected'];
    if (categoryFilterSelected && categoryFilterSelected !== '0') {
      filteredResult = filteredResult.filter(
        (x) => x.categoryId === parseInt(categoryFilterSelected, 10),
      );
    }

    return filteredResult;
  },
};

export default {
  namespaced: true,
  state: {
    toDos: null,
  } as ToDoState,
  mutations: {
    setItems(state: ToDoState, payload: Array<Item>) {
      state.toDos = payload;
    },
  },
  actions: {
    async getItems(context: any) {
      console.log(0);
      // proxy not working for post? hmmm
      const items = await (await fetch('/api/items')).json();
      console.log(1, items);
      context.commit('setItems', items);
    },
  },
  getters: moduleGetters,
};
