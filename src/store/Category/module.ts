import { Category, CategorySubmission } from '@/types/ToDoTypes';
import json from '../../../testData/categories.json';

interface CategoryState {
  categories: Array<Category>;
  activeCategoryId: number | null;
}

export default {
  namespaced: true,
  state: {
    categories: json,
    activeCategoryId: null,
  } as CategoryState,
  mutations: {
    setActiveCategoryId(state: CategoryState, payload: number) {
      state.activeCategoryId = payload;
    },
  },
  actions: {
    createCategory(context: any, payload: CategorySubmission) {
      // update via api here
      console.log('create', payload);
    },
    editCategory(context: any, payload: CategorySubmission) {
      // hooold up, we're gonna need the id on that model...
      // update via api here
      console.log('edit', payload);
    },
    setActiveCategoryId(context: any, payload: string) {
      context.commit('setActiveCategoryId', parseInt(payload, 10));
    },
  },
  getters: {
    categories: (state: CategoryState) => state.categories,
    getActiveCategory: (state: CategoryState) => json.find((x) => x.id === state.activeCategoryId),
  },
};
