import { Category } from '@/types/ToDoTypes';
import json from '../../../testData/categories.json';

interface CategoryState {
  categories: Array<Category>;
  selected: number | null;
}

export default {
  namespaced: true,
  state: {
    categories: json,
    selected: null,
  } as CategoryState,
  getters: {
    Categories: (
      state: CategoryState,
      getters: any,
      rootState: any,
      rootGetters: any,
    ) => rootGetters['CategoryModule/categories'],
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
