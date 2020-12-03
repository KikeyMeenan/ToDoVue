import { Category } from '@/types/ToDoTypes';

interface CategoryState {
  selected: number | null;
}

export default {
  namespaced: true,
  state: {
    selected: null,
  } as CategoryState,
  getters: {
    Categories: (
      state: CategoryState,
      getters: any,
      rootState: any,
      rootGetters: any,
    ) => rootGetters['CategoryModule/categories'] as Array<Category>,
    Selected: (state: CategoryState) => state.selected,
  },
  mutations: {
    changeSelected(state: CategoryState, payload: number) {
      state.selected = payload;
    },
  },
  actions: {
    changeSelected(context: any, payload: number) {
      context.commit('changeSelected', payload);
    },
  },
};
